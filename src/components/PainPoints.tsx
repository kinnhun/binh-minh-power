"use client";

import React from "react";
import { AlertTriangle, TrendingUp, Hourglass, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function PainPoints() {
  const risks = [
    {
      title: "Mất đơn hàng vào tay đối thủ",
      description: (
        <span>
          Các đối tác mua hàng lớn tại Đức, Hà Lan, Pháp đang bắt đầu <strong className="text-deep-brown font-black underline decoration-solar-gold/30">bổ sung điều khoản chứng chỉ xanh bắt buộc</strong> vào các hợp đồng cung ứng năm 2026.
        </span>
      ),
      icon: AlertTriangle,
      border: "border-l-4 border-red-500",
    },
    {
      title: "Chịu mức thuế CBAM cao hơn",
      description: (
        <span>
          Kể từ năm 2026: <strong className="text-solar-gold font-black underline decoration-solar-gold/30">80–100 EUR/tấn CO₂</strong>. Ví dụ, một nhà máy quy mô 4MW có thể phải gánh thêm khoản chi phí carbon từ <strong className="text-deep-brown font-black">2–5 tỷ VND/năm</strong> nếu không có hồ sơ điện sạch.
        </span>
      ),
      icon: TrendingUp,
      border: "border-l-4 border-orange-500",
    },
    {
      title: "Không kịp thời hạn nộp hồ sơ",
      description: (
        <span>
          Quy trình khảo sát, nộp và được phê duyệt cấp chứng chỉ I-REC trên registry quốc tế thường <strong className="text-deep-brown font-black">kéo dài từ 2–4 tháng</strong>. Chuẩn bị muộn đồng nghĩa với việc <strong className="text-deep-brown font-black">bỏ lỡ kỳ đánh giá</strong> của đối tác.
        </span>
      ),
      icon: Hourglass,
      border: "border-l-4 border-solar-gold",
    },
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Big Editorial Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl glass-card-dark text-white border border-earth-brown/40 relative shadow-xl overflow-hidden group cursor-default transition-all duration-300"
          >
            {/* Slowly rotating glowing backdrop orb */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-solar-gold/20 via-orange-500/5 to-transparent rounded-full blur-xl pointer-events-none"
            />
            
            <div className="space-y-6 relative z-10">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <Quote className="w-12 h-12 text-solar-gold opacity-90" />
              </motion.div>
              <blockquote>
                <span className="text-solar-gold/80 text-[10px] font-black uppercase tracking-wider block mb-2">
                  Thực tế tại doanh nghiệp
                </span>
                <p className="text-xl sm:text-2xl font-bold font-sans italic leading-relaxed text-cream-base">
                  “Năm nay buyer EU hỏi I-REC, chúng tôi <span className="text-solar-gold underline decoration-solar-gold/30 font-black">mất trắng đơn hàng</span>.”
                </p>
              </blockquote>
              <div className="w-12 h-0.5 bg-solar-gold/60"></div>
            </div>

            <div className="mt-12 space-y-5 relative z-10">
              <p className="text-stone-300 text-sm leading-relaxed">
                Các doanh nghiệp xuất khẩu Việt Nam đang đứng trước ranh giới chuyển dịch xanh bắt buộc. Không có I-REC hoặc dữ liệu điện sạch đồng nghĩa với việc tự loại mình khỏi chuỗi cung ứng châu Âu.
              </p>
              <div className="text-[10px] text-solar-gold/90 font-black uppercase tracking-widest bg-white/[0.06] border border-white/5 px-3.5 py-2 rounded-full inline-block">
                Thị trường dệt may · Gỗ · Cơ khí chính xác
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Risk Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="text-left space-y-2 mb-2">
              <span className="text-solar-gold text-xs sm:text-sm font-bold uppercase tracking-widest block">
                Câu chuyện phổ biến của nhà máy xuất khẩu VN hiện nay
              </span>
              <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                3 rủi ro lớn các nhà máy xuất khẩu EU đang đối mặt
              </h2>
            </div>

            <div className="space-y-4">
              {risks.map((risk, idx) => {
                const Icon = risk.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ 
                      y: -6, 
                      borderColor: "rgba(248, 185, 20, 0.45)", 
                      boxShadow: "0 12px 30px rgba(100, 69, 25, 0.05)",
                      backgroundColor: "#FFFDF9"
                    }}
                    className={`p-5 sm:p-6 bg-[#FCFBF9] rounded-2xl border border-stone-200 ${risk.border} flex flex-col sm:flex-row gap-4 items-start transition-all duration-300 shadow-sm group cursor-pointer`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-cream-base flex items-center justify-center text-earth-brown shrink-0 border border-solar-gold/20 transition-all duration-300 group-hover:bg-solar-gold group-hover:text-deep-brown group-hover:scale-110">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-extrabold text-navy-accent text-base mb-1 group-hover:text-solar-gold transition-colors duration-200">
                        {risk.title}
                      </h3>
                      <p className="text-stone-800 text-sm leading-relaxed">
                        {risk.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
