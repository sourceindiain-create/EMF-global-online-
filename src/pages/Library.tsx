import React from "react";
import { 
  Library, 
  Book, 
  Video, 
  GraduationCap, 
  Search, 
  Download, 
  Play, 
  Plus,
  ArrowRight,
  Star,
  Clock,
  Award
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const categories = ["All", "Agriculture", "Business", "Technology", "Health", "Soft Skills"];

const books = [
  { title: "Modern Organic Farming", author: "Dr. S. Kumar", rating: 4.8, type: "PDF", size: "12MB", img: "https://picsum.photos/seed/book1/400/600" },
  { title: "Startup Guide for Rural India", author: "EMF Research", rating: 4.9, type: "PDF", size: "8MB", img: "https://picsum.photos/seed/book2/400/600" },
  { title: "Ayurveda for Daily Life", author: "Vaidya R. Sharma", rating: 4.7, type: "PDF", size: "15MB", img: "https://picsum.photos/seed/book3/400/600" },
];

const courses = [
  { title: "Agri-Drone Operation", duration: "12 Lessons", level: "Intermediate", students: "1.2k", img: "https://picsum.photos/seed/course1/400/300" },
  { title: "Digital Marketing 101", duration: "8 Lessons", level: "Beginner", students: "3.5k", img: "https://picsum.photos/seed/course2/400/300" },
  { title: "Organic Fertilizer Making", duration: "5 Lessons", level: "Beginner", students: "2.1k", img: "https://picsum.photos/seed/course3/400/300" },
];

export default function DigitalLibrary() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Digital Library</h1>
          <p className="text-neutral-500 mt-1">Free books, video courses, and certification system for everyone.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm">
            <Award size={20} className="text-blue-600" />
            <div>
              <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Certifications</p>
              <p className="text-sm font-bold text-neutral-900">12 Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Categories */}
      <div className="space-y-6">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for books, courses, or topics..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
          />
        </div>
        <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-primary/20 hover:bg-neutral-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Free Books Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Book size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-neutral-900">Free Books</h2>
          </div>
          <button className="text-sm text-primary font-bold flex items-center gap-1 hover:underline">
            View All Books
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-4 flex gap-6 hover:shadow-lg transition-all group">
              <div className="w-32 aspect-[2/3] rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-between py-2">
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 leading-tight line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-neutral-500">{book.author}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-bold">{book.rating}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-bold uppercase">
                    <span>{book.type}</span>
                    <span>•</span>
                    <span>{book.size}</span>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Courses Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-neutral-900">Video Courses</h2>
          </div>
          <button className="text-sm text-primary font-bold flex items-center gap-1 hover:underline">
            View All Courses
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold">
                  {course.duration}
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-neutral-900 leading-tight">{course.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                      <GraduationCap size={14} />
                      {course.level}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.students} students
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-primary/5 text-primary rounded-xl font-bold hover:bg-primary/10 transition-all text-sm">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
