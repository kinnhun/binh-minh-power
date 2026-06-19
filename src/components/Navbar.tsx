"use client";

import React, { useState, useEffect } from "react";
import { Phone, Award } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state when scrolled past the UrgencyBar height
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed left-0 right-0 z-45 transition-all duration-300 px-4 sm:px-6",
        isScrolled ? "top-3 py-0" : "top-12 py-0"
      )}
    >
      {/* Floating Capsule Bar */}
      <div className={cn(
        "max-w-5xl mx-auto flex items-center justify-between rounded-full border transition-all duration-350 px-4 sm:px-5",
        isScrolled 
          ? "bg-white/75 backdrop-blur-md border-stone-200/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-2" 
          : "bg-white/[0.04] backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] py-3"
      )}>
        
        {/* Compact Brand Logo & Tagline */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center font-black text-xs relative overflow-hidden transition-all duration-300 group-hover:scale-105 shrink-0",
            isScrolled 
              ? "bg-deep-brown text-solar-gold border border-earth-brown/10" 
              : "bg-solar-gold/15 text-solar-gold border border-solar-gold/30"
          )}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-solar-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 font-sans tracking-tight">BMC</span>
          </div>
          
          <div className="flex flex-col text-left leading-none">
            <span className={cn(
              "font-sans font-black tracking-tight text-xs sm:text-sm transition-colors duration-300",
              isScrolled 
                ? "text-navy-accent group-hover:text-solar-gold" 
                : "text-white group-hover:text-solar-gold"
            )}>
              Bình Minh Power
            </span>
            <span className={cn(
              "font-sans text-[8.5px] mt-0.5 flex items-center gap-0.5 leading-none font-semibold shrink-0 transition-colors duration-300",
              isScrolled ? "text-earth-brown" : "text-stone-300"
            )}>
              <Award className="w-2.5 h-2.5 text-solar-gold shrink-0" />
              Đại lý I-REC cấp 1
            </span>
          </div>
        </div>

        {/* Navigation Section Anchors - Hidden on mobile/tablet, beautiful on desktop */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 rounded-full px-2 py-1 select-none border transition-all duration-300",
          isScrolled 
            ? "bg-stone-100/60 border-stone-200/40" 
            : "bg-white/[0.04] border-white/10"
        )}>
          {[
            { label: "Rủi ro", href: "#pain-points" },
            { label: "Quy trình", href: "#solution" },
            { label: "Thực tế", href: "#case-studies" },
            { label: "Hỏi đáp", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-[11px] font-black transition-all duration-200 px-3 py-1.5 rounded-full",
                isScrolled 
                  ? "text-stone-500 hover:text-navy-accent hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)]" 
                  : "text-stone-300 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Slender Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Slender Hotline Link Capsule */}
          <motion.a
            href="tel:0901234788"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-2 font-sans px-3 py-1.5 rounded-full border transition-all focus:outline-none",
              isScrolled 
                ? "bg-[#FFFDF2] border-solar-gold/30 hover:border-solar-gold" 
                : "bg-white/[0.03] border-white/10 hover:border-solar-gold/40"
            )}
          >
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shadow-xs shrink-0 relative overflow-visible border transition-all duration-300",
              isScrolled 
                ? "bg-white border-solar-gold/20 text-earth-brown" 
                : "bg-white/10 border-white/10 text-solar-gold"
            )}>
              <span className="absolute inset-0 rounded-full bg-solar-gold/25 animate-ping scale-110"></span>
              
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Phone className="w-3 h-3 text-solar-gold fill-solar-gold/10" />
              </motion.div>
            </div>
            
            <div className="flex flex-col text-left leading-none pr-1">
              <span className={cn(
                "text-[7.5px] font-bold uppercase tracking-wider hidden sm:block transition-colors duration-300",
                isScrolled ? "text-stone-500" : "text-stone-400"
              )}>Hotline</span>
              <span className={cn(
                "font-black text-xs mt-0.5 transition-colors duration-300",
                isScrolled ? "text-navy-accent" : "text-white"
              )}>0901 234 788</span>
            </div>
          </motion.a>
          
          {/* Slender CTA Button */}
          <motion.button
            type="button"
            onClick={openAuditModal}
            whileHover={{ 
              scale: 1.04, 
              boxShadow: isScrolled 
                ? "0 0 0 6px rgba(11, 19, 41, 0.1)" 
                : "0 0 0 6px rgba(248, 185, 20, 0.18)" 
            }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "relative overflow-hidden group px-4 py-2 rounded-full text-[11px] sm:text-xs font-black shadow-xs cursor-pointer focus:outline-none transition-all duration-300",
              isScrolled 
                ? "bg-navy-accent hover:bg-earth-brown text-white" 
                : "bg-solar-gold hover:bg-solar-gold-hover text-deep-brown"
            )}
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none"
            />
            <span className="relative z-10">Audit Miễn Phí</span>
          </motion.button>
        </div>

      </div>
    </motion.header>
  );
}
