"use client";

import React from "react";
import { ShieldCheck, Zap, Layers, DollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function WhyBMC() {
  const cards = [
    {
      title: "Đơn vị cung cấp tín chỉ I-REC",
      description: "BMC cung cấp tín chỉ I-REC hợp lệ từ các dự án năng lượng tái tạo đang vận hành. Quy trình đăng ký rõ ràng, đảm bảo chứng chỉ phát hành đúng chuẩn và được công nhận toàn cầu.",
      icon: ShieldCheck,
    },
    {
      title: "Nhanh nhất: 2–4 tuần",
      description: "Doanh nghiệp tự làm mất 3–6 tháng để nghiên cứu và xử lý thủ tục. BMC rút ngắn thời gian chuẩn bị và đăng ký xuống chỉ còn 2-4 tuần nhờ quy trình tối ưu hóa.",
      icon: Zap,
    },
    {
      title: "Trọn gói dịch vụ A–Z",
      description: "BMC thay doanh nghiệp đảm nhận mọi khâu: Khảo sát thực tế → chuẩn bị hồ sơ → nộp và theo dõi registry → bàn giao chứng chỉ → hỗ trợ giải trình với buyer EU.",
      icon: Layers,
    },
    {
      title: "Báo phí minh bạch",
      description: "Chúng tôi cam kết không phát sinh bất kỳ khoản chi phí ẩn nào. Báo giá trọn gói được chốt rõ ràng trước khi ký hợp đồng. Miễn phí audit ban đầu 100%.",
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Điểm mạnh của chúng tôi
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            Tại sao chọn Bình Minh Power?
          </h2>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#FCFBF9] border border-stone-200 rounded-3xl p-6 sm:p-8 text-left hover:border-solar-gold/50 hover:bg-[#FFFDF2] transition-all duration-300 flex items-start gap-5 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream-base border border-solar-gold/20 flex items-center justify-center text-earth-brown shrink-0 group-hover:bg-solar-gold group-hover:text-deep-brown transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-deep-brown text-base sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="text-stone-800 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
