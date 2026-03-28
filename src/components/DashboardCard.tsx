import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

export default function DashboardCard({ title, description, icon: Icon, path, color = "bg-primary" }: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link 
        to={path}
        className="group block p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all h-full relative overflow-hidden"
      >
        <div className={cn("absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full -mr-16 -mt-16", color)} />
        
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg relative z-10 group-hover:rotate-6 transition-transform", color)}>
          <Icon size={28} />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            {description}
          </p>
          
          <div className="mt-8 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
            Access Module
            <div className="w-4 h-[1px] bg-primary" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
