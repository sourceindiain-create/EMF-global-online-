import React from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  ShoppingCart, 
  Heart, 
  Star, 
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Plus
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const categories = ["All", "Agriculture", "Handmade", "Ayurveda", "Seeds", "Tools"];

const products = [
  { id: "1", name: "Organic Neem Fertilizer", price: "₹450", rating: 4.8, reviews: 128, img: "https://picsum.photos/seed/neem/400/400", category: "Agriculture" },
  { id: "2", name: "Handmade Clay Water Pot", price: "₹320", rating: 4.9, reviews: 85, img: "https://picsum.photos/seed/pot/400/400", category: "Handmade" },
  { id: "3", name: "Pure Ashwagandha Powder", price: "₹580", rating: 4.7, reviews: 210, img: "https://picsum.photos/seed/herb/400/400", category: "Ayurveda" },
  { id: "4", name: "Hybrid Tomato Seeds (100g)", price: "₹150", rating: 4.6, reviews: 340, img: "https://picsum.photos/seed/seeds/400/400", category: "Seeds" },
  { id: "5", name: "Traditional Hand Sickle", price: "₹280", rating: 4.5, reviews: 56, img: "https://picsum.photos/seed/tool/400/400", category: "Tools" },
  { id: "6", name: "Organic Honey (500g)", price: "₹420", rating: 4.9, reviews: 190, img: "https://picsum.photos/seed/honey/400/400", category: "Ayurveda" },
];

export default function Ecommerce() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">E-commerce & Village Products</h1>
          <p className="text-neutral-500 mt-1">Directly buy agriculture, handmade, and ayurvedic products from local producers.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-3 bg-white border rounded-xl hover:bg-neutral-50 transition-all shadow-sm">
            <ShoppingCart size={24} className="text-neutral-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
            <Plus size={20} />
            Sell Product
          </button>
        </div>
      </div>

      {/* Search & Categories */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for products, seeds, or tools..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            />
          </div>
          <button className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-bold text-neutral-600 hover:bg-neutral-50 transition-all flex items-center gap-2">
            <Filter size={20} />
            Filters
          </button>
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

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
        {[
          { icon: Truck, title: "Fast Delivery", desc: "To your doorstep" },
          { icon: ShieldCheck, title: "Secure Payment", desc: "100% safe transactions" },
          { icon: RefreshCcw, title: "Easy Returns", desc: "7-day return policy" },
        ].map((badge, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white border rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
              <badge.icon size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">{badge.title}</p>
              <p className="text-xs text-neutral-500">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="aspect-square relative overflow-hidden bg-neutral-100">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-neutral-400 hover:text-red-500 transition-colors shadow-sm">
                <Heart size={18} />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={12} fill={i <= Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="text-xs font-bold text-neutral-400 ml-1">({product.reviews})</span>
                </div>
                <h3 className="font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-neutral-900">{product.price}</span>
                <button 
                  onClick={() => setCartCount(prev => prev + 1)}
                  className="p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Banner */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative z-10 space-y-6 max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Support Local Village Artisans & Farmers.</h2>
          <p className="text-lg opacity-75">Every purchase you make directly supports a rural household and helps preserve traditional Indian crafts.</p>
          <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-primary/20 mx-auto md:mx-0">
            Learn More
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="relative z-10 w-full md:w-1/3 aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
          <ShoppingBag size={120} className="text-yellow-400 opacity-50" />
        </div>
      </div>
    </div>
  );
}
