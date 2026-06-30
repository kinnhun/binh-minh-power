"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function BottomRightCorner() {
  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block fixed bottom-6 right-6 z-40"
    >
      <motion.button
        type="button"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={openAuditModal}
        className="glass-card-dark text-white rounded-2xl p-4 flex items-center gap-3 border border-earth-brown/30 shadow-lg cursor-pointer max-w-xs text-left"
      >
        <div className="w-10 h-10 rounded-full bg-solar-gold flex items-center justify-center text-deep-brown shrink-0">
          <PhoneCall className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-solar-gold font-bold uppercase tracking-wider leading-none">
            Tư vấn trong 2h
          </span>
          <span className="text-sm font-bold mt-1 text-white leading-none">
            0913 943 788
          </span>
          <span className="text-[10px] text-white/70 mt-1 leading-none">
            Nhấp để gửi yêu cầu audit
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
