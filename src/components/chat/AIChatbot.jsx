import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to LOONIX! I'm your AI style assistant. How can I help you today?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Mock AI response
        setTimeout(() => {
            let responseText = "That's interesting! I recommend checking out our Executive Haircut or facial treatments. Would you like to see our academy courses as well?";

            const lowerInput = input.toLowerCase();
            if (lowerInput.includes("hair")) {
                responseText = "For your hair, our senior stylists recommend the Executive Haircut or Keratin Therapy for a smooth finish.";
            } else if (lowerInput.includes("book") || lowerInput.includes("appointment")) {
                responseText = "You can book an appointment directly through our Contact page or by calling 09560563836.";
            } else if (lowerInput.includes("academy") || lowerInput.includes("course")) {
                responseText = "We offer Professional Barber and Hair Styling courses. Check our Academy page for details on certification!";
            }

            setMessages((prev) => [...prev, { id: Date.now() + 1, text: responseText, sender: "bot" }]);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-[60] bg-gold-gradient text-secondary p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
                <Bot size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 left-6 z-[70] w-80 md:w-96 glass-card shadow-2xl overflow-hidden flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-gold-gradient p-4 flex items-center justify-between text-secondary">
                            <div className="flex items-center space-x-2 font-bold">
                                <Bot size={20} />
                                <span>LOONIX Style AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m) => (
                                <div key={m.id} className={cn("flex", m.sender === "user" ? "justify-end" : "justify-start")}>
                                    <div className={cn(
                                        "max-w-[80%] p-3 rounded-2xl text-sm",
                                        m.sender === "user" ? "bg-primary text-secondary rounded-tr-none" : "bg-white/10 text-white rounded-tl-none"
                                    )}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <button type="submit" className="bg-primary p-2 rounded-full text-secondary hover:brightness-110">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
