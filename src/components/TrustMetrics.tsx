"use client";

import React from "react";
import { AlertCircle, Clock, CheckSquare, Shield, Layers, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function TrustMetrics() {
  const metrics = [
    {
      value: "80–100 EUR",
      label: "Chi phí phát sinh mỗi tấn CO₂",
      description: "Có thể phát sinh khi hồ sơ phát thải carbon không được chuẩn bị đúng quy chuẩn CBAM.",
      icon: AlertCircle,
    },
    {
      value: "15–20%",
      label: "Giá trị đơn hàng bị ảnh hưởng",
      description: "Nguy cơ mất lợi thế cạnh tranh nếu thiếu I-REC hoặc carbon report theo yêu cầu của buyer.",
      icon: HelpCircle,
    },
    {
      value: "2–4 tuần",
      label: "Thời gian BMC hoàn thiện",
      description: "Quy trình rút ngắn tối đa nếu cung cấp đầy đủ thông tin pháp lý và chỉ số tiêu thụ.",
      icon: Clock,
    },
    {
      value: "50+ nhà máy",
      label: "Đã triển khai cùng BMC",
      description: "Thành công tại các khu công nghiệp trọng điểm như VSIP Bình Dương, Amata, Long Hậu.",
      icon: CheckSquare,
    },
    {
      value: "8 năm",
      label: "Kinh nghiệm thực chiến",
      description: "Hoạt động chuyên sâu trong lĩnh vực năng lượng tái tạo, EPC, PPA và hồ sơ điện sạch.",
      icon: Layers,
    },
    {
      value: "Cấp 1 Singapore",
      label: "Đại lý phân phối trực tiếp",
      description: "Đầu mối xử lý I-REC trực tiếp, tối ưu hóa chi phí và đảm bảo tính hợp pháp quốc tế.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-20 bg-cream-base/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Rủi ro & Chỉ số uy tín
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            Rủi ro nếu không hành động & Cam kết thực tế
          </h2>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-solar-gold/20 rounded-2xl p-6 shadow-[0_4px_20px_0_rgba(100,69,25,0.02)] hover:shadow-[0_8px_30px_0_rgba(100,69,25,0.06)] hover:border-solar-gold/40 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-base flex items-center justify-center text-earth-brown border border-solar-gold/10 group-hover:bg-solar-gold group-hover:text-deep-brown transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <span className="text-2xl sm:text-3xl font-extrabold text-deep-brown tracking-tight mb-2">
                  {item.value}
                </span>
                
                <h3 className="text-navy-accent font-bold text-sm sm:text-base mb-2">
                  {item.label}
                </h3>
                
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
