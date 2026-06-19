"use client";

import React from "react";
import { Factory, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function CaseStudy() {
  const caseStudies = [
    {
      name: "Nhà máy Gỗ Đất Việt",
      location: "KCN Bàu Bàng, Bình Dương",
      capacity: "840 kWp",
      timeline: "3 tuần",
      purpose: "Báo cáo ESG gửi tập đoàn Đức",
      description: "BMC hoàn thiện toàn bộ hồ sơ đăng ký tài sản và cấp phát chứng chỉ thuộc tính điện sạch đáp ứng thời hạn kiểm toán quốc tế của đối tác Đức.",
    },
    {
      name: "Nhà máy Gỗ Thuận Lợi",
      location: "Đồng Xoài, Bình Phước",
      capacity: "1.2 MWp (1,200 kWp)",
      timeline: "4 tuần",
      purpose: "Hồ sơ xanh thông quan EU",
      description: "Hỗ trợ nhà máy đăng ký tài khoản registry quốc tế và phát hành I-REC chứng minh xuất xứ điện phục vụ khai báo carbon chuỗi đơn hàng châu Âu.",
    },
    {
      name: "Xi Măng Bình Long",
      location: "Chơn Thành, Bình Phước",
      capacity: "4 MWp (4,000 kWp)",
      timeline: "4 tuần",
      purpose: "Khai báo giảm thuế CBAM",
      description: "Thiết lập hồ sơ Scope 2 đầy đủ kết hợp chứng chỉ I-REC giúp tối ưu phương pháp tính thuế carbon trực tiếp cho mặt hàng xi măng xuất khẩu.",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-cream-base/30 relative overflow-hidden">
      {/* Abstract sketch line visual decorations */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute right-0 bottom-0 w-96 h-96 border-t-2 border-l-2 border-earth-brown rounded-tl-[100px]"></div>
        <div className="absolute left-10 top-10 w-48 h-48 border-b-2 border-r-2 border-earth-brown"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Dự án thực tế
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            Số liệu thực tế từ 3 nhà máy tiêu biểu đã nhận I-REC
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            BMC đã đồng hành cùng hàng chục nhà máy xuất khẩu tại các KCN trọng điểm trong nước hoàn thiện dữ liệu phát thải Scope 2 và thuộc tính I-REC Standard.
          </p>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-stone-200 rounded-3xl p-6 flex flex-col justify-between text-left hover:border-solar-gold/40 hover:shadow-[0_8px_30px_rgba(100,69,25,0.04)] transition-all duration-300 shadow-sm relative group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-base flex items-center justify-center text-earth-brown group-hover:bg-solar-gold group-hover:text-deep-brown transition-colors shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-accent text-sm sm:text-base leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[10px] text-stone-500 mt-0.5 block leading-none">
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-stone-650 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Data specifications */}
              <div className="mt-auto border-t border-stone-150 pt-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Công suất:</span>
                  <span className="font-bold text-navy-accent">{item.capacity}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Thời gian cấp:</span>
                  <span className="font-bold text-navy-accent">{item.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Mục đích chính:</span>
                  <span className="font-bold text-solar-gold bg-deep-brown px-2 py-0.5 rounded text-[10px]">
                    {item.purpose}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer testimonial quote */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl glass-card border border-white/50 shadow-md text-left relative"
        >
          <div className="absolute -top-5 -left-5 w-10 h-10 bg-solar-gold rounded-full flex items-center justify-center text-deep-brown shadow">
            <Quote className="w-4 h-4 fill-current" />
          </div>

          <div className="space-y-4">
            <blockquote>
              <p className="text-navy-accent font-sans font-bold text-base sm:text-lg italic leading-relaxed">
                “Chúng tôi cần I-REC gấp cho báo cáo ESG Q2/2026 gửi cho tập đoàn mẹ tại Đức. BMC hoàn thiện toàn bộ hồ sơ trong 3 tuần, đúng deadline, không cần chúng tôi làm gì nhiều. Rất chuyên nghiệp.”
              </p>
            </blockquote>
            
            <div className="flex items-center justify-between flex-wrap gap-2 border-t border-stone-200/50 pt-3">
              <div>
                <span className="font-bold text-navy-accent text-sm">GĐ — Giám đốc Gỗ Đất Việt</span>
                <span className="text-stone-500 text-xs ml-2">KCN Bàu Bàng, Bình Dương</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-earth-brown font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-solar-gold" />
                <span>100% Hồ sơ được chấp thuận</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
