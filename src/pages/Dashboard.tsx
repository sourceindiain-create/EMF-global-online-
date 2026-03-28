import React from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  Sprout, 
  Rocket, 
  Library, 
  ShoppingBag, 
  HeartPulse, 
  Settings, 
  Globe,
  PlusCircle,
  MessageCircle,
  TrendingUp,
  Users,
  Award,
  Search,
  Mic,
  ArrowRight,
  Cloud
} from "lucide-react";
import Layout from "@/src/components/Layout";
import DashboardCard from "@/src/components/DashboardCard";
import { motion } from "motion/react";

const services = [
  { 
    title: "Share Job Platform", 
    description: "Post and apply for jobs, skills, agriculture land, and services.", 
    icon: Briefcase, 
    path: "/jobs",
    color: "bg-gradient-to-br from-blue-600 to-blue-800 shadow-blue-200"
  },
  { 
    title: "Farmers Place", 
    description: "Agriculture solutions, crop suggestions, and AI farming advice.", 
    icon: Sprout, 
    path: "/farmers",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-yellow-200"
  },
  { 
    title: "Startup Club", 
    description: "Skill development and business ideas for women and students.", 
    icon: Rocket, 
    path: "/startup",
    color: "bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-200"
  },
  { 
    title: "Digital Library", 
    description: "Free books, video courses, and certification system.", 
    icon: Library, 
    path: "/library",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-yellow-200"
  },
  { 
    title: "E-commerce", 
    description: "Buy and sell agriculture, handmade, and ayurvedic products.", 
    icon: ShoppingBag, 
    path: "/shop",
    color: "bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-200"
  },
  { 
    title: "Health & Services", 
    description: "Ayurveda, Yoga, NLP, and online doctor booking.", 
    icon: HeartPulse, 
    path: "/health",
    color: "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-yellow-200"
  },
  { 
    title: "Cloud & Hosting", 
    description: "Free web hosting and cloud services for your digital projects.", 
    icon: Cloud, 
    path: "/cloud",
    color: "bg-gradient-to-br from-blue-300 to-blue-500 shadow-blue-200"
  },
];

const languages = [
  { code: "en", name: "English" },
  { code: "te", name: "Telugu" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "or", name: "Oriya" },
];

import { useAuth } from "@/src/contexts/AuthContext";

import { cn } from "@/src/lib/utils";

export default function Dashboard() {
  const [selectedLang, setSelectedLang] = React.useState("en");
  const { profile } = useAuth();
  const [stats, setStats] = React.useState({
    totalUsers: "1.2M+",
    activeJobs: "45k+",
    ruralImpact: "200k+",
    certifications: "85k+"
  });

  React.useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(data => {
        setStats({
          totalUsers: (data.totalUsers / 1000000).toFixed(1) + "M+",
          activeJobs: (data.activeJobs / 1000).toFixed(0) + "k+",
          ruralImpact: (data.ruralImpact / 1000).toFixed(0) + "k+",
          certifications: (data.certifications / 1000).toFixed(0) + "k+"
        });
      })
      .catch(err => console.error("Failed to fetch stats:", err));
  }, []);

  return (
    <div className="space-y-12 relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 blur-[150px] rounded-full" />
      </div>
      {/* Header with Language Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Enterprise Dashboard</h1>
          <p className="text-slate-500 font-medium tracking-wide">
            Welcome back, <span className="text-slate-900 font-bold">{profile?.displayName?.split(' ')[0] || "User"}</span>. 
            Here's your organizational overview.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
            <Globe size={16} />
          </div>
          <select 
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="bg-transparent border-none text-xs font-bold uppercase tracking-widest focus:ring-0 cursor-pointer pr-8 text-slate-600"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* AI Smart Search Bar */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-yellow-400/20 to-blue-400/20 blur-3xl rounded-full -z-10 animate-pulse" />
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="relative bg-white border border-slate-100 rounded-[2rem] shadow-2xl shadow-slate-200/50 p-3 flex items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary ml-2">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                placeholder="How can we assist you today? (e.g., 'Find agricultural land for lease')" 
                className="flex-1 bg-transparent border-none focus:ring-0 text-lg py-4 font-medium placeholder:text-slate-400"
              />
              <div className="flex items-center gap-2 pr-2">
                <button className="p-3 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
                  <Mic size={24} />
                </button>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                  Search
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Enterprise Jobs", "Crop Analytics", "Startup Funding", "Digital Library", "Health Consult"].map(tag => (
              <button key={tag} className="px-5 py-2 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:border-primary hover:text-primary hover:shadow-md transition-all uppercase tracking-widest">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 tracking-tight">Core Modules</h2>
          <div className="h-[1px] flex-1 bg-slate-100 mx-8 hidden md:block" />
          <button className="text-sm font-bold text-primary hover:underline underline-offset-4">View All Modules</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <DashboardCard key={idx} {...service} />
          ))}
        </div>
      </div>

      {/* Quick Actions & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Recent Activity</h2>
                <p className="text-sm text-slate-400 font-medium">Track your latest interactions across the platform.</p>
              </div>
              <button className="p-3 bg-slate-50 text-slate-400 hover:text-primary rounded-xl transition-all">
                <PlusCircle size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: "Applied for 'Senior Research Analyst' position", time: "2 hours ago", icon: Briefcase, color: "text-blue-600 bg-blue-50" },
                { title: "Procured 'Smart Irrigation System' components", time: "5 hours ago", icon: ShoppingBag, color: "text-emerald-600 bg-emerald-50" },
                { title: "Certified in 'Sustainable Agriculture Practices'", time: "Yesterday", icon: Library, color: "text-orange-600 bg-orange-50" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", item.color)}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 truncate tracking-tight">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">{item.time}</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors" />
            <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Enterprise Plus</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">Unlock advanced analytics, priority support, and global networking.</p>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-4xl font-display font-bold">₹499</span>
              <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">/ Annual</span>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              Upgrade Account
            </button>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
            <h3 className="text-lg font-display font-bold text-slate-900 mb-8 tracking-tight">Platform Metrics</h3>
            <div className="space-y-8">
              {[
                { label: "Global Network", value: stats.totalUsers, icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Open Positions", value: stats.activeJobs, icon: TrendingUp, color: "text-yellow-500", bg: "bg-yellow-50" },
                { label: "Rural Impact", value: stats.ruralImpact, icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Certifications", value: stats.certifications, icon: Award, color: "text-yellow-500", bg: "bg-yellow-50" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.bg, stat.color)}>
                      <stat.icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 tracking-tight">{stat.label}</span>
                  </div>
                  <span className="text-lg font-display font-bold text-slate-900">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
