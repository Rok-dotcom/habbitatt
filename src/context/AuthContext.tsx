import { createContext, useContext, useState, type ReactNode } from "react";
import type { User, UserRole } from "../types";
import { authService } from "../services/authService";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("habitatt-user");
    return stored ? (JSON.parse(stored) as User) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const persist = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem("habitatt-user", JSON.stringify(u));
    else localStorage.removeItem("habitatt-user");
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const u = await authService.login(email, password);
      persist(u);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setLoading(true);
    setError(null);
    try {
      const u = await authService.register(name, email, password, role);
      persist(u);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    persist(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
