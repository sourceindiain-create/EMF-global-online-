import React from "react";
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  ShoppingBag,
  ArrowRight,
  Star,
  Plus,
  Search,
  BookOpen
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const tracks = [
  { title: "Skill Development", desc: "Learn tailoring, digital marketing, or coding.", icon: GraduationCap, color: "text-blue-500 bg-blue-50" },
  { title: "Business Ideas", desc: "Get 100+ low-cost startup ideas for rural areas.", icon: Lightbulb, color: "text-yellow-500 bg-yellow-50" },
  { title: "Product Selling", desc: "List your handmade products on our marketplace.", icon: ShoppingBag, color: "text-blue-500 bg-blue-50" },
  { title: "Mentorship", desc: "Connect with successful entrepreneurs.", icon: Users, color: "text-yellow-500 bg-yellow-50" },
];

const products = [
  { name: "Handmade Bamboo Baskets", price: "₹250", rating: 4.8, sales: 120, img: "https://picsum.photos/seed/basket/400/300" },
  { name: "Organic Turmeric Powder", price: "₹180", rating: 4.9, sales: 450, img: "https://picsum.photos/seed/turmeric/400/300" },
  { name: "Hand-woven Silk Saree", price: "₹4,500", rating: 4.7, sales: 85, img: "https://picsum.photos/seed/saree/400/300" },
];

export default function StartupClub() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Women & Student Startup Club</h1>
          <p className="text-neutral-500 mt-1">Empowering the next generation of entrepreneurs with skills and resources.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={20} />
          Register for Training
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 max-w-lg space-y-4">
          <h2 className="text-3xl font-bold">Turn Your Idea into a Business</h2>
          <p className="opacity-90">Join 5,000+ women and students who have started their own small businesses using our platform.</p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-blue-600 px-6 py-2.5 rounded-xl font-bold hover:bg-neutral-100 transition-all">
              Explore Ideas
            </button>
            <button className="bg-white/20 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-white/30 transition-all border border-white/30">
              Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tracks.map((track, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-all group cursor-pointer">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", track.color)}>
              <track.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">{track.title}</h3>
            <p className="text-sm text-neutral-500 mt-2">{track.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Products */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900">Member Products</h2>
            <button className="text-sm text-primary font-bold flex items-center gap-1 hover:underline">
              View Marketplace
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <div key={idx} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                    <Star size={10} className="text-yellow-500 fill-yellow-500" />
                    {p.rating}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-neutral-900 text-sm line-clamp-1">{p.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{p.price}</span>
                    <span className="text-[10px] text-neutral-400 font-medium">{p.sales} Sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Registration */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6 h-fit">
          <h3 className="text-lg font-bold text-neutral-900">Upcoming Training</h3>
          <div className="space-y-4">
            {[
              { title: "Digital Marketing for Small Biz", date: "Apr 05", time: "10:00 AM", icon: BookOpen },
              { title: "Handmade Soap Making", date: "Apr 12", time: "02:00 PM", icon: BookOpen },
              { title: "Financial Literacy 101", date: "Apr 18", time: "11:00 AM", icon: BookOpen },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                  <item.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-neutral-900 truncate">{item.title}</p>
                  <p className="text-[10px] text-neutral-500">{item.date} • {item.time}</p>
                </div>
                <button className="text-[10px] font-bold text-primary hover:underline">Join</button>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-primary/5 text-primary rounded-xl font-bold hover:bg-primary/10 transition-all text-sm">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
