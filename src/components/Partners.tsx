"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function Partners() {
  const partners = [
    "I-REC Standard",
    "Huawei Solar",
    "VSIP Group",
    "Ban Quản Lý KCN",
    "Nhà Máy Xuất Khẩu EU",
    "Đối tác EPC / PPA / ESG"
  ];

  return (
    <section className="py-16 bg-stone-50 border-t border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Hệ sinh thái liên kết
          </span>
          <h2 className="text-navy-accent text-xl sm:text-2xl font-extrabold tracking-tight">
            Đối tác & chứng nhận toàn cầu
          </h2>
        </div>

        {/* Minimalist Logo Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto mb-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="px-5 py-3 rounded-xl bg-white border border-stone-200/80 text-stone-600 font-sans text-xs sm:text-sm font-bold tracking-tight shadow-sm hover:border-solar-gold/30 hover:text-navy-accent transition-all flex items-center gap-2 select-none"
            >
              <Check className="w-4 h-4 text-solar-gold shrink-0" />
              <span>{partner}</span>
            </motion.div>
          ))}
        </div>

        {/* Supporting context labels */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-sans">
            BMC đồng hành cùng doanh nghiệp trong hệ sinh thái năng lượng tái tạo, hồ sơ điện sạch, hợp đồng mua bán điện PPA, đăng ký I-REC và xây dựng dữ liệu carbon tối ưu cho thị trường xuất khẩu khó tính.
          </p>
        </div>

      </div>
    </section>
  );
}
