import React from "react";
import { 
  Cloud, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Server,
  Code,
  Database
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const hostingProviders = [
  {
    name: "Vercel",
    description: "Best for Next.js and frontend frameworks. Fast, global CDN.",
    features: ["Free SSL", "Custom Domains", "Global Edge Network"],
    url: "https://vercel.com",
    color: "bg-slate-900",
    icon: Zap
  },
  {
    name: "Netlify",
    description: "Powerful platform for modern web projects. Great for static sites.",
    features: ["Continuous Deployment", "Forms & Functions", "Instant Rollbacks"],
    url: "https://netlify.com",
    color: "bg-blue-500",
    icon: Globe
  },
  {
    name: "InfinityFree",
    description: "Truly free web hosting with PHP, MySQL and no ads on your site.",
    features: ["99.9% Uptime", "Unlimited Hosting", "Free Subdomains"],
    url: "https://infinityfree.net",
    color: "bg-blue-600",
    icon: Server
  },
  {
    name: "GitHub Pages",
    description: "Host directly from your GitHub repository. Simple and free.",
    features: ["Jekyll Integration", "Custom Domains", "HTTPS by Default"],
    url: "https://pages.github.com",
    color: "bg-slate-800",
    icon: Code
  }
];

const domainOptions = [
  { tld: ".web", price: "Free", description: "Perfect for personal projects and web apps." },
  { tld: ".site", price: "Free", description: "Great for community sites and local businesses." },
  { tld: ".online", price: "Free", description: "Establish your presence in the digital world." },
];

const phpStarterScript = `<?php
// EMF Global - Simple Contact Form Backend
// Save this as 'contact.php' on your free hosting

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    $recipient = "your-email@example.com";
    $subject = "New contact from $name";
    $email_content = "Name: $name\\n";
    $email_content .= "Email: $email\\n\\n";
    $email_content .= "Message:\\n$message\\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>`;

export default function CloudHosting() {
  return (
    <div className="space-y-12 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Cloud & Hosting</h1>
          <p className="text-slate-500 font-medium mt-2">Deploy your digital projects with ease using our curated hosting solutions.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">EMF Cloud Active</span>
          </div>
        </div>
      </div>

      {/* Featured Service */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white p-12 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
            <Cloud size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold mb-6 tracking-tight">EMF Community Cloud</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            We provide free hosting credits and technical support for rural startups and student projects. 
            Build your digital presence without worrying about infrastructure costs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20">
              Apply for Credits
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10">
              Documentation
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hosting Providers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hostingProviders.map((provider, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-slate-100 rounded-[2rem] p-10 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-8">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", provider.color)}>
                <provider.icon size={24} />
              </div>
              <a 
                href={provider.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight">{provider.name}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {provider.description}
            </p>
            <div className="space-y-3 mb-10">
              {provider.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>
            <button className="w-full py-4 rounded-2xl border-2 border-slate-100 font-bold text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Domain Registration Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Claim Your Free Domain</h2>
          <p className="text-slate-500 mt-4">Get a professional web address for your community project or startup.</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="search-your-name.web" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none font-bold text-slate-900"
              />
            </div>
            <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20">
              Check Availability
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {domainOptions.map((option, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{option.tld}</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">{option.price}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Starter Scripts Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Backend Starter Scripts</h2>
            <p className="text-slate-500">Copy and use these scripts on your free hosting to power your site.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-700">
            <Code size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">PHP Ready</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">contact.php</h4>
                <p className="text-slate-400 text-xs">Simple Contact Form Handler</p>
              </div>
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(phpStarterScript);
                alert("PHP Script copied to clipboard!");
              }}
              className="px-4 py-2 bg-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/20 transition-all border border-white/10"
            >
              Copy Script
            </button>
          </div>

          <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm text-blue-300 overflow-x-auto border border-white/5">
            <pre>{phpStarterScript}</pre>
          </div>
          
          <div className="mt-8 flex items-center gap-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
              <Zap size={16} />
            </div>
            <p className="text-xs text-blue-200">
              <strong>Tip:</strong> Upload this file to your <strong>InfinityFree</strong> or <strong>000webhost</strong> public_html folder to start receiving emails from your website.
            </p>
          </div>
        </div>
      </section>

      {/* Free Hosting Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Free Hosting", value: "Unlimited", icon: Server, color: "text-blue-600 bg-blue-50" },
          { label: "Free Domains", value: ".web, .site", icon: Globe, color: "text-yellow-600 bg-yellow-50" },
          { label: "PHP Support", value: "Version 8.x", icon: Code, color: "text-blue-600 bg-blue-50" },
          { label: "SSL Certificate", value: "Free Included", icon: ShieldCheck, color: "text-yellow-600 bg-yellow-50" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-6 shadow-sm space-y-3">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.color)}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
              <p className="text-lg font-bold text-slate-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Support Section */}
      <section className="bg-blue-50 rounded-[2.5rem] p-12 border border-blue-100">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Need Technical Help?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team of experts is available to help you set up your hosting, configure domains, 
              and optimize your web application for performance.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                  <Server size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700">Setup Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700">Security Audit</span>
              </div>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Contact Support Team
          </button>
        </div>
      </section>
    </div>
  );
}
