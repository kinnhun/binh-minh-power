"use client";

import React from "react";
import { AlertOctagon, UserCheck, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function WhoNeedsThis() {
  const groups = [
    {
      title: "Nhóm chịu áp lực CBAM trực tiếp",
      subtitle: "Ngành công nghiệp nặng & phụ trợ",
      description: "Các sản phẩm thuộc diện khai báo carbon bắt buộc khi thông quan vào châu Âu.",
      industries: ["Sắt thép, luyện kim", "Nhôm & thành phẩm nhôm", "Xi măng & vật liệu liên quan", "Phân bón & hóa chất", "Hydrogen & điện năng", "Các doanh nghiệp trong chuỗi cung ứng carbon-intensive"],
      icon: ShieldAlert,
      bg: "bg-red-50/50 border-red-200",
      iconColor: "text-red-700 bg-red-100/80",
    },
    {
      title: "Nhóm chịu yêu cầu từ buyer EU / UK",
      subtitle: "Các ngành sản xuất tiêu dùng & xuất khẩu",
      description: "Yêu cầu cung cấp dữ liệu phát thải Scope 2 kèm I-REC để duy trì chuỗi cung ứng.",
      industries: ["Dệt may, giày da & xơ sợi", "Gỗ, nội thất & thủ công mỹ nghệ", "Linh kiện điện tử & bán dẫn", "Nhựa, cao su & bao bì", "Thực phẩm, chế biến thủy hải sản", "Nhà máy trong KCN cấp 1-2 cho châu Âu"],
      icon: UserCheck,
      bg: "bg-[#FFFDF2] border-solar-gold/30",
      iconColor: "text-earth-brown bg-cream-base border border-solar-gold/20",
    },
    {
      title: "Nhóm cần ESG & báo cáo Scope 2",
      subtitle: "Báo cáo phát thải & tài chính xanh",
      description: "Đáp ứng tiêu chuẩn kiểm toán quốc tế, tập đoàn mẹ hoặc các quỹ đầu tư xanh.",
      industries: ["Doanh nghiệp làm báo cáo ESG thường niên", "Doanh nghiệp tính carbon footprint sản phẩm", "Chứng từ Green Energy Credentials", "Nhà máy thuộc tập đoàn đa quốc gia", "Nhà cung cấp cần kiểm toán Scope 2", "Doanh nghiệp thu hút vốn FDI ngoại"],
      icon: AlertOctagon,
      bg: "bg-stone-50 border-stone-200",
      iconColor: "text-navy-accent bg-stone-200/60",
    },
  ];

  return (
    <section className="py-24 bg-cream-base/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Đối tượng mục tiêu
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            Nhà máy nào cần kiểm tra I-REC ngay?
          </h2>
          <p className="text-stone-850 text-sm sm:text-base leading-relaxed font-medium">
            Dịch vụ I-REC của Bình Minh Power phù hợp với các doanh nghiệp đang xuất khẩu hoặc chuẩn bị xuất khẩu sang EU / UK, đặc biệt trong các nhóm ngành có yêu cầu cao về dữ liệu carbon, ESG, Scope 2 và năng lượng tái tạo.
          </p>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl border ${group.bg} flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold ${group.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-accent text-base sm:text-lg leading-snug">
                      {group.title}
                    </h3>
                    <span className="text-stone-500 text-xs mt-0.5 block">
                      {group.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-stone-800 text-xs sm:text-sm leading-relaxed mb-6 border-b border-stone-200 pb-4">
                  {group.description}
                </p>

                {/* Industries list */}
                <ul className="space-y-3 mt-2 flex-grow">
                  {group.industries.map((ind, indIdx) => (
                    <li key={indIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-gold shrink-0 mt-2"></span>
                      <span className="font-sans leading-tight">{ind}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
