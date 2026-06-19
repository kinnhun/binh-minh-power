"use client";

import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const services = [
    "I-REC",
    "CBAM",
    "Scope 2",
    "ESG Report",
    "PPA 0 Đồng",
    "Điện mặt trời áp mái",
    "EPC năng lượng tái tạo",
  ];

  return (
    <footer className="bg-navy-accent border-t border-white/10 text-stone-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-deep-brown flex items-center justify-center text-solar-gold font-bold text-lg border border-earth-brown/20">
                BMC
              </div>
              <span className="font-sans font-bold text-white text-lg tracking-tight">
                Bình Minh Power
              </span>
            </div>
            <p className="text-stone-300 text-sm font-semibold max-w-sm">
              BMC — Kiến tạo hạ tầng năng lượng bền vững cho doanh nghiệp Việt Nam.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Chúng tôi đồng hành cùng doanh nghiệp xuất khẩu tối ưu hóa chi phí carbon, hoàn thiện hồ sơ điện sạch, thúc đẩy chuyển dịch năng lượng xanh bền vững theo quy chuẩn quốc tế.
            </p>
          </div>

          {/* Quick Info Contact Column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Liên hệ BMC
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href="tel:0901234788" 
                className="flex items-center gap-2.5 hover:text-solar-gold transition-colors focus:outline-none"
              >
                <Phone className="w-4 h-4 text-solar-gold" />
                <span>Hotline: 0901 234 788</span>
              </a>

              <a 
                href="mailto:info@binhminhpower.vn" 
                className="flex items-center gap-2.5 hover:text-solar-gold transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4 text-solar-gold" />
                <span>Email: info@binhminhpower.vn</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-solar-gold shrink-0 mt-0.5" />
                <span>Văn phòng đại diện tại TP. Hồ Chí Minh & Bình Dương</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Dịch vụ nổi bật
            </h3>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {services.map((svc) => (
                <span 
                  key={svc}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-stone-300 text-xs font-semibold hover:border-solar-gold/20 hover:text-white transition-all select-none"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-medium">
            © 2026 Bình Minh Power — Đại lý I-REC cấp 1 tại Việt Nam. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer select-none">
              Điều khoản dịch vụ <ExternalLink className="w-3 h-3" />
            </span>
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer select-none">
              Chính sách bảo mật <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
