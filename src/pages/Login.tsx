import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  UserCircle, 
  Users, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck 
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { UserRole } from "@/src/types";

const roles: { id: UserRole; name: string; icon: any; color: string }[] = [
  { id: "student", name: "Student", icon: GraduationCap, color: "text-blue-500 bg-blue-50" },
  { id: "client", name: "Client", icon: UserCircle, color: "text-yellow-500 bg-yellow-50" },
  { id: "admin", name: "Office/Admin", icon: ShieldCheck, color: "text-blue-500 bg-blue-50" },
  { id: "partner", name: "Company Partner", icon: Users, color: "text-yellow-500 bg-yellow-50" },
  { id: "team", name: "Team Member", icon: Briefcase, color: "text-blue-500 bg-blue-50" },
];

import { useAuth } from "@/src/contexts/AuthContext";

export default function Login() {
  const [selectedRole, setSelectedRole] = React.useState<UserRole>("student");
  const { signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithGoogle(selectedRole);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-[45%] bg-slate-900 items-center justify-center p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.1),transparent_50%)]" />
        
        <div className="relative z-10 space-y-12 max-w-lg">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">EMF</div>
            <span className="text-2xl font-display font-bold tracking-tight">EMF Global</span>
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              The Future of <span className="text-primary">Enterprise</span> Efficiency.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Experience a unified ecosystem designed for multinational scale and local impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8">
            {[
              { title: "Unified Infrastructure", desc: "One platform for all your organizational needs." },
              { title: "Enterprise Security", desc: "Bank-grade encryption and role-based access." },
              { title: "Global Reach", desc: "Localized solutions for diverse communities." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 bg-white">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-4">
            <div className="md:hidden flex justify-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">EMF</div>
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Sign In</h2>
            <p className="text-slate-500 font-medium tracking-wide">Select your organizational role to continue.</p>
          </div>

          {/* Role Selector */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Select Role</label>
            <div className="grid grid-cols-2 gap-3">
              {roles.map(role => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left group",
                    selectedRole === role.id 
                      ? "border-primary bg-primary/5 ring-4 ring-primary/5" 
                      : "border-slate-100 bg-white hover:border-slate-200"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", 
                    role.color.replace('bg-', 'bg-opacity-10 bg-')
                  )}>
                    <role.icon size={20} className={role.color.split(' ')[0]} />
                  </div>
                  <span className={cn(
                    "text-sm font-bold tracking-tight", 
                    selectedRole === role.id ? "text-primary" : "text-slate-600"
                  )}>
                    {role.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <button 
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 disabled:opacity-50 group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Continue with Google
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-slate-400 font-medium leading-relaxed">
              By continuing, you agree to EMF Global's <a href="#" className="text-slate-900 underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-slate-900 underline underline-offset-4">Privacy Policy</a>.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-center gap-2">
            <span className="text-sm text-slate-500 font-medium">New to EMF?</span>
            <Link to="/register" className="text-sm font-bold text-primary hover:underline underline-offset-4">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
