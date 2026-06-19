"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function UrgencyBar() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDays = () => {
      const deadline = new Date("2026-12-31T00:00:00+07:00");
      const today = new Date();
      const diffTime = deadline.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    };

    const frameId = requestAnimationFrame(calculateDays);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full bg-deep-brown text-white py-2.5 px-4 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 relative z-50 border-b border-solar-gold/20">
      <AlertTriangle className="w-4.5 h-4.5 text-solar-gold animate-bounce shrink-0" />
      <span>
        ⚠ CBAM Phase 2 có hiệu lực từ 31/12/2026 — còn{" "}
        <span className="text-solar-gold font-extrabold underline decoration-solar-gold/40">
          {daysLeft !== null ? daysLeft : "đang tải..."}
        </span>{" "}
        ngày để chuẩn bị hồ sơ | Thuế phạt tới{" "}
        <span className="text-solar-gold font-extrabold underline decoration-solar-gold/40">
          80–100 EUR/tấn CO₂
        </span>
      </span>
    </div>
  );
}
