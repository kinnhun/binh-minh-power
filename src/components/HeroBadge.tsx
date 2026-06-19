"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-base/80 border border-solar-gold/30 text-earth-brown text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm"
    >
      <ShieldCheck className="w-4 h-4 text-solar-gold shrink-0" />
      <span className="tracking-wide">CBAM 2026 · I-REC · HỒ SƠ XUẤT KHẨU EU</span>
    </motion.div>
  );
}
