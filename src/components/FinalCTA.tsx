"use client";

import React from "react";
import { Phone, CheckSquare } from "lucide-react";
import { motion } from "motion/react";

export default function FinalCTA() {
  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  return (
    <section className="relative py-28 bg-deep-brown overflow-hidden">
      {/* Background Image with Rich Color & Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
        style={{ backgroundImage: "url('/solar_energy_bg.png')" }}
      />
      {/* Dark gradient overlay for transition blend and typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown via-navy-accent/90 to-deep-brown/95 pointer-events-none" />
      
      {/* Soft circular glows */}
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-solar-gold/10 blur-3xl"></div>
      <div className="absolute right-10 top-0 w-60 h-60 rounded-full bg-earth-brown/20 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-solar-gold text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Hành động ngay hôm nay
          </span>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Đừng để CBAM cắt đứt chuỗi đơn hàng EU của bạn
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nhà máy xuất khẩu EU cần chuẩn bị I-REC, dữ liệu điện sạch và hồ sơ carbon trước khi buyer yêu cầu bổ sung. BMC giúp bạn kiểm soát rủi ro pháp lý và chi phí carbon ngay từ hôm nay.
          </p>
        </motion.div>

        {/* Highlights capsule badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-cream-base"
        >
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-solar-gold shrink-0" />
            <span>Audit miễn phí</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-solar-gold shrink-0" />
            <span>Không ràng buộc</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-solar-gold shrink-0" />
            <span>Phản hồi trong 2 giờ</span>
          </div>
        </motion.div>

        {/* Call to actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            type="button"
            onClick={openAuditModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-extrabold text-sm sm:text-base shadow-lg hover:shadow-solar-gold/20 transition-all cursor-pointer focus:outline-none animate-pulse-glow"
          >
            Bắt đầu audit I-REC miễn phí ngay
          </button>
          
          <a
            href="tel:0901234788"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all focus:outline-none"
          >
            <Phone className="w-4 h-4 text-solar-gold" />
            Gọi ngay 0901 234 788
          </a>
        </motion.div>

      </div>
    </section>
  );
}
