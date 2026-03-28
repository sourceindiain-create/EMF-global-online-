import React from "react";
import { 
  Sprout, 
  CloudRain, 
  Wind, 
  Thermometer, 
  Droplets,
  Plane,
  Bot,
  ArrowRight,
  TrendingUp,
  Calendar,
  Search,
  Plus
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const weatherStats = [
  { label: "Temp", value: "32°C", icon: Thermometer, color: "text-yellow-500" },
  { label: "Humidity", value: "65%", icon: Droplets, color: "text-blue-500" },
  { label: "Rain Chance", value: "10%", icon: CloudRain, color: "text-blue-400" },
  { label: "Wind", value: "12 km/h", icon: Wind, color: "text-neutral-400" },
];

const cropSuggestions = [
  { name: "Paddy (Rice)", suitability: "High", season: "Kharif", profit: "₹45k/acre", color: "bg-blue-50 text-blue-700" },
  { name: "Cotton", suitability: "Medium", season: "Kharif", profit: "₹60k/acre", color: "bg-yellow-50 text-yellow-700" },
  { name: "Maize", suitability: "High", season: "Year-round", profit: "₹35k/acre", color: "bg-blue-50 text-blue-700" },
];

export default function Farmers() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Farmers Place</h1>
          <p className="text-neutral-500 mt-1">Smart agriculture solutions and AI-based farming advice.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plane size={20} />
          Book Drone Service
        </button>
      </div>

      {/* Weather & Soil Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {weatherStats.map((stat, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-4 shadow-sm flex items-center gap-4">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-50", stat.color)}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">{stat.label}</p>
              <p className="text-lg font-bold text-neutral-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Farming Advice */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Bot size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900">AI Crop Advisor</h2>
                <p className="text-sm text-neutral-500">Personalized advice based on your soil and location.</p>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-2xl p-6 border border-dashed border-neutral-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <p className="text-neutral-600 max-w-md">
                  "Based on current weather patterns and soil moisture in your region, it's the perfect time to apply organic fertilizers to your Paddy crops."
                </p>
                <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                  Get Detailed Report
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white border rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
                  <Droplets size={16} className="text-blue-500" />
                  Irrigation Alert
                </div>
                <p className="text-xs text-neutral-500">Next watering recommended in 2 days at 6:00 AM.</p>
              </div>
              <div className="p-4 bg-white border rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
                  <TrendingUp size={16} className="text-blue-500" />
                  Market Price Trend
                </div>
                <p className="text-xs text-neutral-500">Rice prices expected to rise by 15% next month.</p>
              </div>
            </div>
          </div>

          {/* Crop Suggestions */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Recommended Crops</h2>
            <div className="space-y-4">
              {cropSuggestions.map((crop, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                      <Sprout size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{crop.name}</p>
                      <p className="text-xs text-neutral-500">{crop.season} Season</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", crop.color)}>
                      {crop.suitability} Suitability
                    </span>
                    <p className="text-sm font-bold text-neutral-900 mt-1">{crop.profit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-primary text-white rounded-2xl p-6 shadow-lg shadow-primary/20">
            <h3 className="text-lg font-bold mb-4">Drone Booking</h3>
            <p className="text-sm opacity-90 mb-6">Book a professional drone for precision spraying and crop monitoring.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} />
                <span>10x Faster than manual</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} />
                <span>90% Water saving</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} />
                <span>Uniform pesticide spread</span>
              </div>
            </div>
            <button className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-neutral-100 transition-all">
              Check Availability
            </button>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Agri Calendar</h3>
            <div className="space-y-4">
              {[
                { date: "Mar 28", event: "Apply Fertilizer", type: "Task" },
                { date: "Apr 02", event: "Pest Inspection", type: "Task" },
                { date: "Apr 15", event: "Harvest Paddy", type: "Goal" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="text-center w-12 flex-shrink-0">
                    <p className="text-xs font-bold text-primary uppercase">{item.date.split(" ")[0]}</p>
                    <p className="text-lg font-bold text-neutral-900">{item.date.split(" ")[1]}</p>
                  </div>
                  <div className="flex-1 border-l pl-4 py-1">
                    <p className="text-sm font-bold text-neutral-900">{item.event}</p>
                    <p className="text-xs text-neutral-500">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 border-2 border-neutral-100 rounded-xl text-sm font-bold text-neutral-600 hover:border-primary/20 hover:bg-neutral-50 transition-all">
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ size }: { size: number }) {
  return (
    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
      <svg width={size-4} height={size-4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}
