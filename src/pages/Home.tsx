import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Star,
  Users,
  Briefcase,
  Sprout,
  Rocket,
  Library,
  ShoppingBag,
  HeartPulse,
  Cloud
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  { title: "Jobs & Services", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-50", gradient: "from-blue-600 to-blue-800" },
  { title: "Farmers Place", icon: Sprout, color: "text-yellow-500", bg: "bg-yellow-50", gradient: "from-yellow-400 to-yellow-600" },
  { title: "Startup Club", icon: Rocket, color: "text-blue-500", bg: "bg-blue-50", gradient: "from-blue-500 to-blue-700" },
  { title: "Digital Library", icon: Library, color: "text-yellow-500", bg: "bg-yellow-50", gradient: "from-yellow-500 to-yellow-700" },
  { title: "E-commerce", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50", gradient: "from-blue-400 to-blue-600" },
  { title: "Health & Services", icon: HeartPulse, color: "text-yellow-500", bg: "bg-yellow-50", gradient: "from-yellow-300 to-yellow-500" },
  { title: "Cloud & Hosting", icon: Cloud, color: "text-blue-500", bg: "bg-blue-50", gradient: "from-blue-300 to-blue-500" },
];

import { cn } from "@/src/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/30">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between sticky top-0 z-50 glass rounded-full mt-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">EMF</div>
          <span className="text-xl font-display font-bold text-slate-900 tracking-tight">EMF Global</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
          <a href="#features" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#about" className="hover:text-primary transition-colors">Enterprise</a>
          <a href="#about" className="hover:text-primary transition-colors">Resources</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-slate-900 hover:text-primary transition-colors">Sign in</Link>
          <Link to="/login" className="btn btn-primary px-8">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/30 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-yellow-400/20 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-400/20 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-8 border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              Global Platform for Innovation
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              Empowering the <br />
              <span className="text-accent">Next Generation</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              EMF Global provides a comprehensive digital ecosystem for rural and urban development, 
              bridging the gap between technology and traditional sectors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login" className="btn btn-primary px-10 py-4 text-base">
                Explore Solutions
                <ArrowRight size={20} />
              </Link>
              <button className="btn btn-outline px-10 py-4 text-base">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/corporate/1920/1080" 
                alt="EMF Global Platform" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 card p-8 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">1.2M+</p>
                  <p className="text-xs text-slate-500 font-medium">Active Users Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full -z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: "Global Users", value: "1.2M+" },
              { label: "Opportunities", value: "450k+" },
              { label: "Rural Impact", value: "200k+" },
              { label: "Certifications", value: "85k+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Enterprise-Grade Solutions</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Our integrated ecosystem provides specialized modules designed to bridge the gap between 
              traditional sectors and modern digital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card p-10 group bg-white border-slate-100/80 relative overflow-hidden"
              >
                <div className={cn("absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br", feature.gradient)} />
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-sm bg-gradient-to-br text-white", feature.gradient)}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Leverage our advanced tools and resources tailored specifically for {feature.title.toLowerCase()} to drive sustainable growth.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-4 transition-all">
                  Explore Module <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">EMF</div>
                <span className="text-xl font-display font-bold text-slate-900 tracking-tight">EMF Global</span>
              </div>
              <p className="text-base text-slate-500 leading-relaxed max-w-sm">
                EMF Global Technology & Research is a multinational leader committed to empowering 
                communities through innovative digital infrastructure and research.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 cursor-pointer transition-all">
                  <Globe size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 cursor-pointer transition-all">
                  <ShieldCheck size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 cursor-pointer transition-all">
                  <Zap size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link to="/jobs" className="hover:text-primary transition-colors">Solutions</Link></li>
                <li><Link to="/farmers" className="hover:text-primary transition-colors">Agriculture</Link></li>
                <li><Link to="/library" className="hover:text-primary transition-colors">Knowledge Base</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs text-slate-400 font-medium tracking-wide">© 2026 EMF Global Technology & Research. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">
                <Globe size={14} />
                English (Global)
              </div>
              <p className="text-xs text-slate-400 font-medium">Cookie Settings</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
