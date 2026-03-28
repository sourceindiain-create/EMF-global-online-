import React from "react";
import { 
  Users, 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Search,
  Filter,
  Download
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const stats = [
  { label: "Total Revenue", value: "₹12.5L", trend: "+12.5%", isUp: true, icon: DollarSign, color: "text-blue-600 bg-blue-50" },
  { label: "Active Users", value: "45.2k", trend: "+8.2%", isUp: true, icon: Users, color: "text-yellow-600 bg-yellow-50" },
  { label: "Job Postings", value: "1,240", trend: "-2.4%", isUp: false, icon: Briefcase, color: "text-blue-600 bg-blue-50" },
  { label: "E-commerce Sales", value: "₹4.8L", trend: "+15.1%", isUp: true, icon: ShoppingBag, color: "text-yellow-600 bg-yellow-50" },
];

const recentUsers = [
  { name: "Suresh Kumar", email: "suresh@example.com", role: "Farmer", status: "Active", joined: "2h ago" },
  { name: "Anjali Sharma", email: "anjali@example.com", role: "Student", status: "Pending", joined: "5h ago" },
  { name: "Vikas Reddy", email: "vikas@example.com", role: "Partner", status: "Active", joined: "1d ago" },
  { name: "Meena Devi", email: "meena@example.com", role: "Client", status: "Active", joined: "2d ago" },
];

export default function AdminPanel() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Admin Panel</h1>
          <p className="text-neutral-500 mt-1">Manage users, services, and track platform performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-bold text-neutral-600 hover:bg-neutral-50 transition-all flex items-center gap-2 shadow-sm">
            <Download size={20} />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.color)}>
                <stat.icon size={24} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                stat.isUp ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
              )}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-neutral-900">Recent Users</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="pl-9 pr-4 py-2 bg-neutral-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Filter size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Joined</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentUsers.map((user, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-neutral-900">{user.name}</p>
                            <p className="text-xs text-neutral-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded-lg">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-lg",
                          user.status === "Active" ? "text-green-600 bg-green-50" : "text-yellow-600 bg-yellow-50"
                        )}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-neutral-500">
                        {user.joined}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t text-center">
              <button className="text-sm text-primary font-bold hover:underline">View All Users</button>
            </div>
          </div>
        </div>

        {/* System Alerts & Notifications */}
        <div className="space-y-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              <AlertCircle size={20} className="text-red-500" />
              System Alerts
            </h3>
            <div className="space-y-4">
              {[
                { title: "High traffic detected", desc: "Server load is at 85%. Scaling up...", time: "10m ago", type: "warning" },
                { title: "New partner request", desc: "AgriCorp wants to join the platform.", time: "1h ago", type: "info" },
                { title: "Payment gateway delay", desc: "Razorpay reporting minor delays.", time: "3h ago", type: "error" },
              ].map((alert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-neutral-900">{alert.title}</p>
                    <span className="text-[10px] text-neutral-400">{alert.time}</span>
                  </div>
                  <p className="text-[10px] text-neutral-500">{alert.desc}</p>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-neutral-50 text-neutral-600 rounded-xl font-bold hover:bg-neutral-100 transition-all text-sm">
              Clear All
            </button>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Platform Health</h3>
            <div className="space-y-6">
              {[
                { label: "Server Uptime", value: "99.98%", color: "bg-green-500" },
                { label: "API Response", value: "120ms", color: "bg-green-500" },
                { label: "Database Load", value: "42%", color: "bg-blue-500" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-neutral-600">{item.label}</span>
                    <span className="text-neutral-900">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", item.color)} style={{ width: "85%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
