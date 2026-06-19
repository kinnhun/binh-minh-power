import React from "react";
import UrgencyBar from "@/components/UrgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhoNeedsThis from "@/components/WhoNeedsThis";
import WhyBMC from "@/components/WhyBMC";
import Solution from "@/components/Solution";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BottomRightCorner from "@/components/BottomRightCorner";
import AuditModal from "@/components/AuditModal";
import TrustTicker from "@/components/TrustTicker";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f7f7f5] antialiased select-text">
      {/* 1. Urgency Bar (Top Countdown) */}
      <UrgencyBar />

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections in DOCX page order */}
      <main>
        {/* 2. Hero Section */}
        <Hero />
        
        {/* Trust factors infinite ticker */}
        <TrustTicker />
        
        {/* 3. Pain Section */}
        <PainPoints />

        {/* Target Audience and Credibility in the middle */}
        <WhoNeedsThis />
        <WhyBMC />
        
        {/* 4. Quy trình Audit (3 Steps) */}
        <Solution />
        
        {/* 5. Social Proof (3 Factories Case Studies) */}
        <CaseStudy />
        
        {/* 6. FAQ (5 Questions) */}
        <FAQ />
        
        {/* 7. Form đầy đủ + CTA chính */}
        <LeadForm />
        <FinalCTA />
      </main>
      
      {/* 8. Footer */}
      <Footer />
      
      {/* Floating Assist Widgets & Modal */}
      <BottomRightCorner />
      <AuditModal />
    </div>
  );
}
