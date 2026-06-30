"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Euro, Percent, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  // Randomized gold energy embers for cinematic sunrise atmosphere
  const sparks = [
    { id: 1, left: "12%", size: 4, delay: 0, duration: 8.5 },
    { id: 2, left: "28%", size: 6, delay: 1.2, duration: 11.0 },
    { id: 3, left: "45%", size: 3, delay: 2.5, duration: 7.5 },
    { id: 4, left: "62%", size: 5, delay: 0.5, duration: 9.5 },
    { id: 5, left: "19%", size: 5, delay: 3.8, duration: 9.0 },
    { id: 6, left: "50%", size: 4, delay: 1.8, duration: 10.0 },
    { id: 7, left: "75%", size: 7, delay: 2.9, duration: 12.0 },
    { id: 8, left: "88%", size: 3, delay: 0.9, duration: 8.0 },
  ];

  const highlights = [
    "Kết quả trong 2–4 tuần",
    "Dịch vụ trọn gói A–Z",
    "50+ nhà máy đã có I-REC"
  ];

  return (
    <section 
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-navy-accent bg-cover bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/solar-sunrise.png')" }}
    >
      {/* Cinematic asymmetric gradient overlay for superb left-side readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1329]/97 via-[#0b1329]/92 to-[#0b1329]/55 backdrop-blur-[1px]"></div>
      
      {/* Dynamic Background Ambient Lighting (Atmospheric Sunrise Orbs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orb 1: Breathes and glows in gold */}
        <motion.div 
          animate={{ 
            scale: [1, 1.18, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-solar-gold/15 blur-[100px]"
        />

        {/* Orb 2: Sunset orange glow drifting near the bottom right */}
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.06, 0.14, 0.06],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute right-10 bottom-10 w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[110px]"
        />

        {/* Cinematic Gold Embers (Drifting Sparks) */}
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ y: "105vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.75, 0.75, 0], 
              x: ["0px", spark.id % 2 === 0 ? "50px" : "-50px"] 
            }}
            transition={{
              duration: spark.duration,
              repeat: Infinity,
              delay: spark.delay,
              ease: "linear",
            }}
            style={{
              left: spark.left,
              width: spark.size,
              height: spark.size,
            }}
            className="absolute rounded-full bg-solar-gold/35 blur-[1px]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full select-text">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines and Core Action */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-7">
            <div className="pt-2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex flex-wrap items-center gap-2.5 p-1.5 pr-4.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg text-[11px] sm:text-xs font-bold leading-none select-none max-w-full hover:border-solar-gold/25 transition-colors duration-300"
              >
                {/* Left Tag: Gold Badge with Blinking Green Dot */}
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-solar-gold/15 border border-solar-gold/35 text-solar-gold text-[9px] font-black uppercase tracking-wider shrink-0">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span>CBAM 2026 & I-REC</span>
                </span>
                
                {/* Right Text */}
                <span className="text-stone-300 tracking-wide font-semibold">
                  Hồ sơ bắt buộc cho <strong className="text-white font-black underline decoration-solar-gold/30">Nhà máy xuất khẩu EU?</strong>
                </span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] flex flex-col font-sans">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-solar-gold font-black bg-gradient-to-r from-solar-gold via-amber-400 to-[#ffd984] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(248,185,20,0.25)]"
                >
                  Buyer EU sẽ không mua hàng
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white mt-1.5 font-black"
                >
                  từ nhà máy chưa có I-REC
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-solar-gold text-lg sm:text-2xl mt-4 font-bold tracking-wide border-l-2 border-solar-gold pl-3"
                >
                  Kiểm tra ngay xem anh/chị đang thiếu gì
                </motion.span>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium"
            >
              60% doanh nghiệp xuất khẩu EU hiện đang yêu cầu chứng chỉ xanh. Từ 2026, thuế CBAM có thể ăn thêm <strong className="text-solar-gold font-bold underline decoration-solar-gold/40">80–100 EUR/tấn CO₂</strong>. Audit miễn phí trong 48h — biết chính xác hồ sơ anh/chị cần bổ sung.
            </motion.p>

            {/* CTA Triggering the Popup Modal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="pt-2 w-full sm:w-auto"
            >
              <div className="relative w-full sm:w-auto inline-flex">
                {/* Radiating visual glow waves - perfectly aligned with the button */}
                <motion.span
                  className="absolute inset-0 rounded-full border border-solar-gold/45 bg-solar-gold/5 pointer-events-none z-0"
                  animate={{ scale: [1, 1.15, 1.25], opacity: [0.7, 0.35, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full border border-solar-gold/25 bg-solar-gold/2 pointer-events-none z-0"
                  animate={{ scale: [1, 1.25, 1.4], opacity: [0.5, 0.15, 0] }}
                  transition={{ duration: 1.8, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                />
                
                <motion.button
                  type="button"
                  onClick={openAuditModal}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    scale: [1, 1.012, 1],
                    boxShadow: [
                      "0 4px 20px 0 rgba(248, 185, 20, 0.25)",
                      "0 4px 30px 6px rgba(248, 185, 20, 0.45)",
                      "0 4px 20px 0 rgba(248, 185, 20, 0.25)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="group relative overflow-hidden w-full sm:w-auto px-8 py-5 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-black text-sm sm:text-base flex items-center justify-center gap-3 transition-all cursor-pointer focus:outline-none z-10"
                >
                  {/* Continuous shimmer reflection sweep cycle */}
                  <motion.div
                    animate={{ x: ["-150%", "250%"] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 pointer-events-none"
                  />
                  
                  <span>Kiểm tra ngay — Miễn phí & không ràng buộc</span>
                  
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>

            {/* Staggered Value Highlights with hover glow effects */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-xs sm:text-sm text-stone-200 font-semibold">
              {highlights.map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ 
                    y: -2, 
                    textShadow: "0 0 8px rgba(248, 185, 20, 0.6)", 
                    color: "#F8B914" 
                  }}
                  className="flex items-center gap-2 cursor-default transition-all duration-300"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-solar-gold shrink-0" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Staggered Floating Cards Layout */}
          <div className="lg:col-span-5 flex flex-col space-y-6 pt-10 lg:pt-0 relative">
            <div className="text-left relative z-10">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block mb-1">
                Thiệt hại thực tế
              </span>
              <h3 className="font-black text-white text-lg sm:text-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-solar-gold animate-pulse shrink-0"></span>
                Rủi ro nếu không hành động
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 relative z-10">
              {/* Risk Item 1: Staggers counter-clockwise rotation & floating */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="lg:-translate-y-4"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    rotate: -1.5,
                    borderColor: "rgba(248, 185, 20, 0.45)", 
                    boxShadow: "0 12px 40px -10px rgba(248, 185, 20, 0.18)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-5 border border-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex gap-4 items-start cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-solar-gold/15 border border-solar-gold/25 flex items-center justify-center text-solar-gold shrink-0 transition-transform duration-300 hover:scale-110">
                    <Euro className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-solar-gold text-lg sm:text-xl font-black leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(248,185,20,0.15)]">
                      80–100 EUR
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium">
                      Thuế phạt mỗi tấn CO₂ xuất khẩu sang EU
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Risk Item 2: Medium speed float & floating down */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: 12, // Exaggerates the float direction
                    borderColor: "rgba(248, 185, 20, 0.45)", 
                    boxShadow: "0 12px 40px -10px rgba(248, 185, 20, 0.18)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-5 border border-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex gap-4 items-start cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-solar-gold/15 border border-solar-gold/25 flex items-center justify-center text-solar-gold shrink-0 transition-transform duration-300 hover:scale-110">
                    <Percent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-solar-gold text-lg sm:text-xl font-black leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(248,185,20,0.15)]">
                      15–20%
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium">
                      Giá trị đơn hàng EU có thể mất nếu không tuân thủ
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Risk Item 3: Staggers clockwise rotation & floating */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:translate-y-4"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    rotate: 1.5,
                    borderColor: "rgba(248, 185, 20, 0.45)", 
                    boxShadow: "0 12px 40px -10px rgba(248, 185, 20, 0.18)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-5 border border-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex gap-4 items-start cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-solar-gold/15 border border-solar-gold/25 flex items-center justify-center text-solar-gold shrink-0 transition-transform duration-300 hover:scale-110">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-solar-gold text-lg sm:text-xl font-black leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(248,185,20,0.15)]">
                      Từ 2026
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium">
                      CBAM chính thức áp dụng — nhà máy thiếu hồ sơ sẽ mất quyền xuất khẩu EU
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
