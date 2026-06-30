"use client";

import React from "react";
import { motion } from "motion/react";

export default function TrustTicker() {
  const items = [
    { value: "50+", label: "Nhà máy" },
    { value: "8 năm", label: "Kinh nghiệm" },
    { value: "100%", label: "Hợp lệ EU" },
    { value: "2–4T", label: "Hoàn thiện" },
    { value: "48h", label: "Phản hồi" },
    { value: "A–Z", label: "Trọn gói" },
  ];

  // Triple the items to ensure it covers more than twice the viewport width
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0b1329] border-y border-solar-gold/25 py-4.5 overflow-hidden select-none relative z-20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      {/* Ambient gradient fades on the sides for premium depth */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#0b1329] via-[#0b1329]/70 to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max">
        <motion.div
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 118,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap items-center gap-12 sm:gap-20 pr-12 sm:pr-20"
        >
          {tickerItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3 sm:gap-4 group cursor-default">
                <span className="text-solar-gold font-sans font-black text-lg sm:text-xl md:text-2xl tracking-tight bg-gradient-to-r from-solar-gold via-[#ffe196] to-solar-gold bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(248,185,20,0.3)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {item.value}
                </span>
                <span className="text-stone-200 font-sans font-extrabold text-xs sm:text-sm tracking-wide shrink-0">
                  {item.label}
                </span>
              </div>
              
              {/* Premium diamond separator */}
              <div className="w-1.5 h-1.5 rotate-45 bg-solar-gold/35 shrink-0" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
