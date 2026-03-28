import React from "react";
import { 
  Plus, 
  Search, 
  MapPin, 
  Briefcase, 
  Filter,
  ArrowRight,
  LandPlot,
  Dog,
  Wrench,
  GraduationCap
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const categories = [
  { id: "job", name: "Jobs", icon: Briefcase, color: "text-blue-500 bg-blue-50" },
  { id: "skill", name: "Skills", icon: GraduationCap, color: "text-yellow-500 bg-yellow-50" },
  { id: "land", name: "Agri Land", icon: LandPlot, color: "text-blue-500 bg-blue-50" },
  { id: "animal", name: "Animals", icon: Dog, color: "text-yellow-500 bg-yellow-50" },
  { id: "service", name: "Services", icon: Wrench, color: "text-blue-500 bg-blue-50" },
];

const mockJobs = [
  { id: "1", title: "Organic Farm Manager", company: "Green Valley Farms", location: "Hyderabad, TS", type: "job", price: "₹25k - 35k", time: "2h ago" },
  { id: "2", title: "Drone Pilot for Crop Spraying", company: "AgriTech Solutions", location: "Vijayawada, AP", type: "skill", price: "₹1,500/day", time: "5h ago" },
  { id: "3", title: "5 Acres Fertile Land for Lease", company: "Private Owner", location: "Warangal, TS", type: "land", price: "₹50k/year", time: "1d ago" },
  { id: "4", title: "Pure Breed Gir Cows (3)", company: "Dairy Hub", location: "Nellore, AP", type: "animal", price: "₹85k each", time: "2d ago" },
  { id: "5", title: "Tractor Repair Service", company: "Village Mechanics", location: "Guntur, AP", type: "service", price: "Varies", time: "3d ago" },
];

export default function Jobs() {
  const [activeCategory, setActiveCategory] = React.useState("job");
  const [jobs, setJobs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8 relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Share Job Platform</h1>
          <p className="text-slate-500 font-medium mt-1">Connect with opportunities, land, animals, and services in your community.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all flex items-center gap-3 shadow-xl shadow-primary/20">
          <Plus size={20} />
          Post Something
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for jobs, land, or services..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
          />
        </div>
        <button className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-bold text-neutral-600 hover:bg-neutral-50 transition-all flex items-center gap-2">
          <Filter size={20} />
          Filters
        </button>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-2 gap-4 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all whitespace-nowrap",
              activeCategory === cat.id 
                ? "border-primary bg-primary/5 text-primary" 
                : "border-transparent bg-white text-neutral-600 hover:border-neutral-200"
            )}
          >
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", cat.color)}>
              <cat.icon size={18} />
            </div>
            <span className="font-bold text-sm">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group cursor-pointer relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex gap-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg",
                    categories.find(c => c.id === (job.type || "job"))?.color
                  )}>
                    {React.createElement(categories.find(c => c.id === (job.type || "job"))?.icon || Briefcase, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-slate-500">
                      <span className="font-bold text-slate-700">{job.company}</span>
                      <div className="flex items-center gap-2 font-medium">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <span className="text-primary font-bold tracking-wide">{job.salary || job.price}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{job.time || "Just now"}</span>
                  <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-primary transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
