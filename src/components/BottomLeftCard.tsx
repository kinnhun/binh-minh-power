"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function BottomLeftCard() {
  const benefits = [
    "Kết quả trong 2–4 tuần",
    "Đại lý cấp 1 Singapore",
    "50+ nhà máy đã có I-REC",
    "Phản hồi trong 2 giờ",
    "Hồ sơ phục vụ buyer EU / ESG / Scope 2 / CBAM"
  ];

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-5 border border-white/35 shadow-sm text-left"
    >
      <h3 className="font-sans font-bold text-navy-accent mb-3 text-xs uppercase tracking-wider border-b border-navy-accent/10 pb-2">
        Cam kết dịch vụ từ BMC
      </h3>
      <ul className="space-y-2.5">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-slate-text">
            <CheckCircle2 className="w-4.5 h-4.5 text-solar-gold shrink-0 mt-0.5" />
            <span className="font-sans leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
