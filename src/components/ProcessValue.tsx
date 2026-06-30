"use client";

import React from "react";
import { XCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function ProcessValue() {
  const comparisons = [
    {
      self: "Mất 3–6 tháng tự tìm hiểu & chuẩn bị",
      bmc: "Hoàn thiện hồ sơ nhanh gọn trong 2–4 tuần",
    },
    {
      self: "Dễ thiếu hụt hồ sơ pháp lý, đo đạc sai lệch",
      bmc: "Checklist rõ ràng, chuẩn chỉnh ngay từ ngày đầu",
    },
    {
      self: "Mông lung trước các tiêu chuẩn chứng từ từ buyer",
      bmc: "Tư vấn chuyên sâu theo yêu cầu ESG / Scope 2 / CBAM",
    },
    {
      self: "Khó khăn trong việc theo dõi registry quốc tế",
      bmc: "BMC trực tiếp nộp, giám sát và cập nhật tiến độ liên tục",
    },
    {
      self: "Rủi ro trễ hạn nộp báo cáo carbon năm tài khóa",
      bmc: "Định rõ lộ trình cam kết và timeline triển khai cụ thể",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            So sánh giải pháp
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            Vì sao không nên tự xử lý I-REC vào phút cuối?
          </h2>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Dynamic Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Self Processing */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-stone-50 border border-stone-200 text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-stone-200 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-700 text-lg leading-none">
                    Doanh nghiệp tự xử lý
                  </h3>
                  <span className="text-[10px] text-stone-500 mt-1 block">
                    Nhiều rủi ro & Tự chịu trách nhiệm pháp lý
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5" />
                    <span className="text-stone-600 text-sm leading-relaxed">
                      {item.self}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-stone-200 text-stone-500 text-xs italic">
              * Tỉ lệ hồ sơ bị trì hoãn hoặc từ chối bổ sung cao do thiếu kinh nghiệm làm việc với tổ chức quốc tế.
            </div>
          </motion.div>

          {/* Card 2: BMC Companion */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-cream-base/10 border-2 border-solar-gold text-left flex flex-col justify-between shadow-[0_10px_30px_rgba(100,69,25,0.04)] relative"
          >
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-solar-gold text-deep-brown text-[10px] font-bold uppercase tracking-wider">
              Khuyên dùng
            </div>
            
            <div>
              <div className="flex items-center gap-3 border-b border-solar-gold/20 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream-base flex items-center justify-center text-earth-brown shrink-0 border border-solar-gold/20">
                  <CheckCircle2 className="w-6 h-6 text-solar-gold" />
                </div>
                <div>
                  <h3 className="font-extrabold text-navy-accent text-lg leading-none">
                    Đồng hành cùng BMC
                  </h3>
                  <span className="text-[10px] text-earth-brown mt-1 block">
                    Trọn gói từ audit đến chứng chỉ — Chuyên nghiệp & Tốc độ
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold shrink-0 mt-0.5 animate-pulse" />
                    <span className="text-navy-accent font-medium text-sm leading-relaxed">
                      {item.bmc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-solar-gold/20 text-earth-brown text-xs font-semibold">
              * BMC cam kết chất lượng đầu ra, đồng hành giải trình trực tiếp cho các kiểm toán viên của buyer châu Âu.
            </div>
          </motion.div>
          
        </div>

        {/* Editorial Conclusion */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-cream-base/30 border border-solar-gold/20 text-left relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <ChevronRight className="w-6 h-6 text-solar-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-navy-accent text-base mb-1">
                Kết luận từ chuyên gia
              </h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                I-REC không chỉ là một chứng chỉ thông thường. Đây là bằng chứng điện sạch thiết yếu giúp nhà máy <strong>kiểm soát rủi ro carbon</strong>, củng cố uy tín dữ liệu phát thải với buyer EU và bảo vệ vững chắc lợi thế đàm phán xuất khẩu dài hạn.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
