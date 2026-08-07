import type { User, UserRole } from "../types";

// MOCK AUTH SERVICE
// This simulates a backend using localStorage so the whole app is
// functional today. Replace the bodies of these functions with real
// apiClient.post(...) calls (or Firebase Auth) once the backend exists —
// every component already talks to this file only, via AuthContext.

const DB_KEY = "habitatt-mock-users";
const DELAY = 500;

interface StoredUser extends User {
  password: string;
}

function readDb(): StoredUser[] {
  const raw = localStorage.getItem(DB_KEY);
  return raw ? (JSON.parse(raw) as StoredUser[]) : [];
}

function writeDb(users: StoredUser[]) {
  localStorage.setItem(DB_KEY, JSON.stringify(users));
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const authService = {
  async login(email: string, password: string): Promise<User> {
    await wait(DELAY);
    const users = readDb();
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!found || found.password !== password) {
      throw new Error("Incorrect email or password.");
    }
    localStorage.setItem("habitatt-token", `mock-token-${found.id}`);
    const { password: _pw, ...user } = found;
    return user;
  },

  async register(name: string, email: string, password: string, role: UserRole): Promise<User> {
    await wait(DELAY);
    const users = readDb();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An account with this email already exists.");
    }
    const newUser: StoredUser = {
      id: `u_${Date.now()}`,
      name,
      email,
      role,
      password,
      avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`,
    };
    users.push(newUser);
    writeDb(users);
    localStorage.setItem("habitatt-token", `mock-token-${newUser.id}`);
    const { password: _pw, ...user } = newUser;
    return user;
  },

  logout() {
    localStorage.removeItem("habitatt-token");
  },
};
