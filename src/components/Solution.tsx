"use client";

import React from "react";
import { Search, FileText, Globe, Award, CheckCircle2 } from "lucide-react";
import { motion, useScroll } from "motion/react";

export default function Solution() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      num: "01",
      title: "Audit miễn phí",
      timeline: "Ngày 1–3",
      description: "BMC đánh giá công suất, loại năng lượng, và nhu cầu I-REC theo volume xuất khẩu EU.",
      icon: Search,
    },
    {
      num: "02",
      title: "Hồ sơ đăng ký",
      timeline: "Ngày 3–7",
      description: "BMC chuẩn bị toàn bộ hồ sơ pháp lý — bạn chỉ cần cung cấp thông tin doanh nghiệp cơ bản.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Nộp registry quốc tế",
      timeline: "Ngày 7–14",
      description: "Hồ sơ nộp lên I-REC Standard registry — tổ chức duy nhất được EU, UK, Singapore công nhận.",
      icon: Globe,
    },
    {
      num: "04",
      title: "Phát hành chứng chỉ",
      timeline: "Ngày 14–21",
      description: "1 MWh điện tái tạo = 1 I-REC certificate có mã số duy nhất, truy xuất trên blockchain.",
      icon: Award,
    },
    {
      num: "✓",
      title: "Nhận I-REC hợp lệ",
      timeline: "Tuần 2–4",
      description: "Chứng chỉ đầy đủ pháp lý cho ESG report, buyer EU, khai báo CBAM.",
      icon: CheckCircle2,
    },
  ];

  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  return (
    <section 
      id="solution" 
      className="py-24 bg-[#0a1124] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/solar-sunrise.png')" }}
    >
      {/* Heavy B2B dark overlay to keep content extremely legible and high contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a1124]/97 via-[#0a1124]/93 to-[#04060d]/98 backdrop-blur-[2px]"></div>

      {/* Premium Faint Grid Dot texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }}
      />
      
      {/* Dynamic Background Ambient Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.06, 0.14, 0.06],
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-solar-gold/15 blur-[110px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.18, 1],
            opacity: [0.04, 0.1, 0.04],
            x: [0, -25, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 bottom-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-solar-gold text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Giải pháp BMC
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
            Từ 0 đến I-REC hợp lệ — chỉ 5 bước
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Bình Minh Power là đại lý cấp 1 của I-REC Standard Singapore — đảm bảo chứng chỉ hợp lệ toàn cầu.
          </p>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* 5 Step timeline */}
        <div ref={containerRef} className="relative">
          {/* Background vertical line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 md:-translate-x-1/2 hidden md:block"></div>

          {/* Glowing animated vertical line synced with scroll */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2.5px] bg-gradient-to-b from-solar-gold via-amber-400 to-[#ffd984] origin-top md:-translate-x-1/2 hidden md:block shadow-[0_0_15px_4px_rgba(248,185,20,0.35)] z-0"
          />

          <div className="space-y-16 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const isFinal = step.num === "✓";

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-stretch md:items-center relative ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Text Card Column */}
                  <div className="w-full md:w-[45%] text-left relative z-10">
                    <motion.div 
                      initial={{ 
                        opacity: 0, 
                        x: isEven ? 40 : -40,
                        scale: 0.95,
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ 
                        scale: 1.015, 
                        x: isEven ? -6 : 6, // shift slightly outwards from the central axis
                        borderColor: "rgba(248, 185, 20, 0.45)", 
                        boxShadow: "0 20px 45px rgba(248, 185, 20, 0.15)",
                        backgroundColor: "rgba(13, 22, 48, 0.75)"
                      }}
                      className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0d1630]/40 backdrop-blur-xl transition-all duration-300 relative group cursor-pointer shadow-xl overflow-hidden"
                    >
                      {/* Premium top gradient light bar */}
                      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-solar-gold/30 to-transparent" />
                      
                      {/* Card vertical accent bar on the axis side */}
                      <div className={`absolute inset-y-0 ${isEven ? "right-0 rounded-r-3xl" : "left-0 rounded-l-3xl"} w-[3px] bg-gradient-to-b from-white/10 to-transparent group-hover:from-solar-gold group-hover:to-amber-500 transition-colors duration-300`} />

                      {/* Bridge connector line showing on hover */}
                      {isEven ? (
                        <div className="absolute right-[-32px] top-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/10 group-hover:bg-solar-gold/60 group-hover:shadow-[0_0_8px_rgba(248,185,20,0.5)] transition-all duration-300 z-0 hidden md:block" />
                      ) : (
                        <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/10 group-hover:bg-solar-gold/60 group-hover:shadow-[0_0_8px_rgba(248,185,20,0.5)] transition-all duration-300 z-0 hidden md:block" />
                      )}

                      {/* Large background index label */}
                      <span className="absolute -top-1 -right-1 text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-solar-gold/15 to-transparent font-mono tracking-tighter select-none pointer-events-none transition-all duration-500 group-hover:from-solar-gold/25">
                        {step.num}
                      </span>
                      
                      {/* Timeline tag badge with small pulsing dot */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/30 text-solar-gold text-[10px] font-black uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar-gold animate-pulse"></span>
                        {step.timeline}
                      </div>
                      
                      <h3 className="text-white text-lg sm:text-xl font-extrabold mb-3 group-hover:text-solar-gold transition-colors duration-200">
                        {step.title}
                      </h3>
                      
                      <p className="text-stone-300 text-sm leading-relaxed font-sans font-medium transition-colors duration-300 group-hover:text-stone-200">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Column */}
                  <div className="hidden md:flex w-[10%] items-center justify-center relative z-10">
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 ${
                        isFinal 
                          ? "bg-solar-gold border-solar-gold text-deep-brown shadow-[0_0_20px_rgba(248,185,20,0.5)] animate-pulse" 
                          : "bg-[#0b1329] border-white/20 text-solar-gold shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:border-solar-gold hover:shadow-[0_0_12px_rgba(248,185,20,0.4)]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Spacer Column */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative z-10"
        >
          <motion.button
            type="button"
            onClick={openAuditModal}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden px-8 py-5 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-black text-sm sm:text-base flex items-center justify-center gap-3 transition-all shadow-lg mx-auto cursor-pointer focus:outline-none animate-pulse-glow"
          >
            {/* Continuous shimmer reflection sweep cycle */}
            <motion.div
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 pointer-events-none"
            />
            
            <span>Bắt đầu audit ngay</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
