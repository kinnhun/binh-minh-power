"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "I-REC là gì? Khác gì chứng chỉ năng lượng tái tạo thông thường?",
      answer: "I-REC, viết tắt của International Renewable Energy Certificate, là chứng chỉ thuộc tính năng lượng tái tạo được sử dụng rộng rãi để chứng minh quyền sở hữu điện sạch. Mỗi 1 MWh điện tái tạo tương ứng với 1 I-REC. Với nhà máy xuất khẩu, I-REC giúp bổ sung dữ liệu cho hồ sơ ESG, Scope 2, carbon report và yêu cầu green energy credentials từ buyer quốc tế.",
    },
    {
      question: "Chi phí để sở hữu I-REC là bao nhiêu?",
      answer: "Chi phí tùy thuộc vào lượng MWh cần chứng nhận, kỳ báo cáo và yêu cầu cụ thể của buyer. BMC báo giá sau bước audit miễn phí. Bước audit ban đầu hoàn toàn không ràng buộc tài chính và không bắt buộc ký kết hợp đồng.",
    },
    {
      question: "Nhà máy chưa lắp điện mặt trời áp mái có làm I-REC được không?",
      answer: "Có. Nhà máy hoàn toàn có thể mua thuộc tính I-REC từ các dự án năng lượng tái tạo đang vận hành (thủy điện, điện mặt trời, điện gió) trên lưới điện quốc gia Việt Nam thông qua BMC mà không cần đầu tư lắp đặt hệ thống pin vật lý. Đây là giải pháp nhanh để bổ sung dữ liệu điện sạch cho hồ sơ ESG, Scope 2 và yêu cầu cấp bách từ buyer EU.",
    },
    {
      question: "Thời gian từ lúc liên hệ đến lúc nhận chứng chỉ là bao lâu?",
      answer: "Quy trình tiêu chuẩn: Ngày 1 tiếp nhận thông tin → Ngày 2–3 hoàn thành audit sơ bộ → Ngày 4–7 chuẩn bị hồ sơ → Ngày 7–14 nộp registry quốc tế → Tuần 2–4 chính thức phát hành và bàn giao chứng chỉ. Tổng thời gian kéo dài từ 2–4 tuần nếu hồ sơ đầu vào đầy đủ.",
    },
    {
      question: "I-REC có giúp giảm thiểu rủi ro thuế carbon CBAM không?",
      answer: "I-REC cung cấp bằng chứng rõ ràng về điện tái tạo và dữ liệu điện sạch để bổ sung cho hồ sơ phát thải gián tiếp (Scope 2). Đối với các doanh nghiệp thuộc phạm vi áp dụng trực tiếp của CBAM, việc chuẩn bị hồ sơ I-REC đúng kỳ báo cáo, đúng pháp nhân sở hữu và đúng phương pháp khai báo là cực kỳ quan trọng để kiểm soát rủi ro thuế phát thải.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-earth-brown text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Hỗ trợ giải đáp
          </span>
          <h2 className="text-deep-brown text-2xl sm:text-3xl font-extrabold tracking-tight">
            5 câu hỏi thường gặp về CBAM/I-REC
          </h2>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-solar-gold bg-[#FFFDF2] shadow-[0_4px_25px_0_rgba(100,69,25,0.04)]" : "border-stone-200 bg-[#FCFBF9] hover:bg-[#FFFDF6]"}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-sans font-extrabold text-navy-accent text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-stone-200 transition-transform duration-300 ${isOpen ? "rotate-180 border-solar-gold text-solar-gold" : "text-stone-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-stone-850 text-xs sm:text-sm leading-relaxed border-t border-stone-200/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
