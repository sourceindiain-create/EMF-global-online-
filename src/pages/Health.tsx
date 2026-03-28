import React from "react";
import { 
  HeartPulse, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Plus,
  Activity,
  Brain,
  Flower2,
  Stethoscope,
  Star
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const services = [
  { title: "Ayurveda", desc: "Traditional herbal treatments and consultations.", icon: Flower2, color: "text-blue-500 bg-blue-50" },
  { title: "Yoga & Meditation", desc: "Live and recorded sessions for physical and mental well-being.", icon: Activity, color: "text-yellow-500 bg-yellow-50" },
  { title: "NLP & Therapy", desc: "Mindset coaching and psychological support.", icon: Brain, color: "text-blue-500 bg-blue-50" },
  { title: "Doctor Booking", desc: "Consult with certified medical professionals online.", icon: Stethoscope, color: "text-yellow-500 bg-yellow-50" },
];

const doctors = [
  { name: "Dr. Anjali Rao", specialty: "Ayurvedic Specialist", experience: "12 Years", rating: 4.9, img: "https://picsum.photos/seed/doc1/400/400" },
  { name: "Dr. Rajesh Kumar", specialty: "General Physician", experience: "8 Years", rating: 4.7, img: "https://picsum.photos/seed/doc2/400/400" },
  { name: "Smt. Meera Devi", specialty: "Yoga Instructor", experience: "15 Years", rating: 4.9, img: "https://picsum.photos/seed/doc3/400/400" },
];

export default function HealthServices() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Health & Services</h1>
          <p className="text-neutral-500 mt-1">Holistic well-being through Ayurveda, Yoga, and modern medical services.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <Calendar size={20} />
          Book Appointment
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-all group cursor-pointer">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", service.color)}>
              <service.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-sm text-neutral-500 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Doctors */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900">Recommended Professionals</h2>
            <button className="text-sm text-primary font-bold flex items-center gap-1 hover:underline">
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-square relative overflow-hidden bg-neutral-100">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-sm">
                    <Star size={10} className="text-yellow-500 fill-yellow-500" />
                    {doc.rating}
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">{doc.name}</h4>
                    <p className="text-xs text-primary font-medium">{doc.specialty}</p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 font-medium">
                    <span>{doc.experience} Exp</span>
                    <button className="text-primary font-bold hover:underline">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tracker / Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-neutral-900">Your Health Summary</h3>
            <div className="space-y-4">
              {[
                { label: "Daily Steps", value: "6,450", target: "10,000", color: "bg-blue-500" },
                { label: "Water Intake", value: "2.5L", target: "3.5L", color: "bg-cyan-500" },
                { label: "Sleep", value: "7h 20m", target: "8h", color: "bg-indigo-500" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-neutral-600">{stat.label}</span>
                    <span className="text-neutral-900">{stat.value} / {stat.target}</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full", stat.color)} 
                      style={{ width: `${(parseFloat(stat.value) / parseFloat(stat.target)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-primary/5 text-primary rounded-xl font-bold hover:bg-primary/10 transition-all text-sm">
              Connect Health App
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
            <h3 className="text-lg font-bold mb-4">Daily Yoga Session</h3>
            <p className="text-sm opacity-90 mb-6">Join our live morning yoga session at 6:30 AM tomorrow.</p>
            <button className="w-full bg-yellow-400 text-blue-900 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all">
              Set Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
