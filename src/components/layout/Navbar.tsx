import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, Bell, ChevronDown, LayoutDashboard, LogOut, User as UserIcon } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Medicine", to: "/medicine" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-navy-950/85 backdrop-blur-xl shadow-sm shadow-navy-900/5 border-b border-navy-900/5 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-18 py-3">
        <Logo />

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-navy-800/80 hover:text-navy-950 dark:text-white/70 dark:hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-navy-700 hover:bg-navy-900/5 dark:text-white/70 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                aria-label="Notifications"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-navy-700 hover:bg-navy-900/5 dark:text-white/70 dark:hover:bg-white/10 transition-colors relative"
              >
                <Bell size={18} />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand-500" />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setProfileOpen((v) => !v)}
                  className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-navy-900/10 dark:border-white/15 hover:border-brand-500 transition-colors"
                >
                  <img src={user?.avatar} alt={user?.name} className="h-7 w-7 rounded-full object-cover" />
                  <span className="hidden md:block text-sm font-medium text-navy-900 dark:text-white">
                    {user?.name.split(" ")[0]}
                  </span>
                  <ChevronDown size={14} className="text-navy-500 dark:text-white/50" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-navy-900/8 dark:border-white/10 bg-white dark:bg-navy-900 shadow-xl shadow-navy-900/10 py-2 overflow-hidden">
                    <Link
                      to="/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy-800 dark:text-white/80 hover:bg-navy-900/5 dark:hover:bg-white/5"
                    >
                      <LayoutDashboard size={16} /> Dashboard
                    </Link>
                    <Link
                      to="/dashboard/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy-800 dark:text-white/80 hover:bg-navy-900/5 dark:hover:bg-white/5"
                    >
                      <UserIcon size={16} /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <LogOut size={16} /> Log out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </div>
          )}

          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full text-navy-900 dark:text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-950 border-t border-navy-900/5 dark:border-white/5 px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400" : "text-navy-800 dark:text-white/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 flex gap-2">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" className="w-full">Get Started</Button>
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" className="w-full">Dashboard</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
