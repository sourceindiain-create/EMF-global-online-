import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/src/pages/Home";
import Login from "@/src/pages/Login";
import Dashboard from "@/src/pages/Dashboard";
import Layout from "@/src/components/Layout";

import AIAssistant from "@/src/components/AIAssistant";

import Jobs from "@/src/pages/Jobs";

import Farmers from "@/src/pages/Farmers";

import StartupClub from "@/src/pages/StartupClub";

import DigitalLibrary from "@/src/pages/Library";

import Ecommerce from "@/src/pages/Ecommerce";

import HealthServices from "@/src/pages/Health";

import AdminPanel from "@/src/pages/Admin";
import CloudHosting from "@/src/pages/CloudHosting";

// Mock pages for now
const Placeholder = ({ title }: { title: string }) => (
  <Layout>
    <div className="p-8 bg-white border rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
      <p className="text-neutral-500 mt-2">This module is coming soon. Stay tuned!</p>
    </div>
    <AIAssistant />
  </Layout>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} /> {/* Reuse login for now */}
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Layout><Dashboard /><AIAssistant /></Layout>} />
        <Route path="/jobs" element={<Layout><Jobs /><AIAssistant /></Layout>} />
        <Route path="/farmers" element={<Layout><Farmers /><AIAssistant /></Layout>} />
        <Route path="/startup" element={<Layout><StartupClub /><AIAssistant /></Layout>} />
        <Route path="/library" element={<Layout><DigitalLibrary /><AIAssistant /></Layout>} />
        <Route path="/shop" element={<Layout><Ecommerce /><AIAssistant /></Layout>} />
        <Route path="/health" element={<Layout><HealthServices /><AIAssistant /></Layout>} />
        <Route path="/cloud" element={<Layout><CloudHosting /><AIAssistant /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /><AIAssistant /></Layout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
