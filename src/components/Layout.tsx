import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Briefcase, 
  Sprout, 
  Rocket, 
  Library, 
  ShoppingBag, 
  HeartPulse, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Search,
  MessageSquare,
  Cloud
} from "lucide-react";
import { cn } from "@/src/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

import { useAuth } from "@/src/contexts/AuthContext";

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, profile } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Jobs & Services", path: "/jobs", icon: Briefcase },
    { name: "Farmers Place", path: "/farmers", icon: Sprout },
    { name: "Startup Club", path: "/startup", icon: Rocket },
    { name: "Digital Library", path: "/library", icon: Library },
    { name: "E-commerce", path: "/shop", icon: ShoppingBag },
    { name: "Health & Services", path: "/health", icon: HeartPulse },
    { name: "Cloud & Hosting", path: "/cloud", icon: Cloud },
    { name: "Admin", path: "/admin", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-100 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20">EMF</div>
          <span className="font-display font-bold text-lg text-slate-900 tracking-tight">EMF Global</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 transform transition-transform duration-300 md:relative md:translate-x-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex-1 overflow-y-auto">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">EMF</div>
            <span className="font-display font-bold text-xl text-slate-900 tracking-tight">EMF Global</span>
          </Link>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">Main Menu</h4>
              <nav className="space-y-1">
                {navItems.slice(0, 8).map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group",
                        isActive 
                          ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Icon size={18} className={cn("transition-transform group-hover:scale-110", isActive ? "text-primary" : "text-slate-400")} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">Management</h4>
              <nav className="space-y-1">
                <Link
                  to="/admin"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group",
                    location.pathname === "/admin" 
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Settings size={18} className={cn("transition-transform group-hover:scale-110", location.pathname === "/admin" ? "text-primary" : "text-slate-400")} />
                  Admin Console
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-6 px-2">
            <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary font-bold text-sm shadow-sm overflow-hidden">
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                profile?.displayName?.charAt(0) || "U"
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate tracking-tight">{profile?.displayName || "User"}</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{profile?.role || "Guest"}</p>
            </div>
          </div>
          <button 
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all group"
            onClick={handleLogout}
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
        {/* Top bar */}
        <header className="hidden md:flex bg-white/80 backdrop-blur-md border-b border-slate-100 h-20 items-center justify-between px-10 sticky top-0 z-30">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search enterprise resources..." 
              className="w-full pl-12 pr-6 py-3 bg-slate-50 border-transparent rounded-2xl text-sm font-medium focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-3 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all relative">
                <MessageSquare size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
              </button>
              <button className="p-3 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
                <HeartPulse size={20} />
              </button>
            </div>
            <div className="h-8 w-[1px] bg-slate-100 mx-2" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-slate-900 tracking-tight">{profile?.displayName || "User"}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{profile?.email}</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-slate-200 overflow-hidden">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  profile?.displayName?.charAt(0) || "U"
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-12 max-w-[1600px] mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
