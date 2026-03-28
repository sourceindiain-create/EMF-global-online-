import React from "react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2,
  Mic
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import ReactMarkdown from "react-markdown";
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "bot", content: "Hello! I'm your EMF Global AI Assistant. How can I help you today? You can ask me about jobs, agriculture, health, or any of our services." }
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `You are the EMF Global AI Assistant for the EMF Global Technology & Research Super App. 
          Your goal is to help users find services, products, and solutions within the app.
          The app includes:
          1. Share Job Platform (Jobs, Skills, Land, Animals, Services)
          2. Farmers Place (Agri solutions, AI advice, Drone booking)
          3. Startup Club (Skill dev, Business ideas)
          4. Digital Library (Books, Courses)
          5. E-commerce (Agri, Handmade, Ayurveda)
          6. Health & Services (Ayurveda, Yoga, NLP, Doctor booking)
          
          Always be helpful, professional, and friendly. If a user asks for a service, recommend the best 5 options if possible.
          Support multiple languages: Telugu, English, Hindi, Tamil, Kannada, Malayalam, Oriya.`
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request. How else can I help?";
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "bot", content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all z-50"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">EMF AI Assistant</h3>
                  <p className="text-[10px] opacity-75">Online & Ready to help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex gap-3 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1",
                    msg.role === "user" ? "bg-primary text-white" : "bg-white border text-primary"
                  )}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm shadow-sm",
                    msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white border rounded-tl-none"
                  )}>
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-lg bg-white border text-primary flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="p-3 bg-white border rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-neutral-400">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..." 
                  className="flex-1 pl-4 pr-10 py-3 bg-neutral-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="absolute right-14 text-neutral-400 hover:text-primary transition-colors">
                  <Mic size={18} />
                </button>
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
