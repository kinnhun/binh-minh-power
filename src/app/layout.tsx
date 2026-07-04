import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dịch vụ I-REC cho nhà máy xuất khẩu EU | CBAM 2026 — Bình Minh Power",
  description: "BMC hỗ trợ audit I-REC, hồ sơ điện sạch, Scope 2 và CBAM cho nhà máy xuất khẩu EU. Kiểm tra miễn phí, phản hồi trong 2 giờ.",
  keywords: [
    "dịch vụ I-REC cho nhà máy xuất khẩu EU",
    "I-REC Việt Nam",
    "CBAM 2026",
    "chứng chỉ I-REC",
    "hồ sơ CBAM",
    "Scope 2",
    "carbon footprint xuất khẩu EU",
    "I-REC cho nhà máy",
    "audit I-REC miễn phí"
  ],
  authors: [{ name: "Bình Minh Power" }],
  openGraph: {
    title: "Dịch vụ I-REC cho nhà máy xuất khẩu EU | CBAM 2026 — Bình Minh Power",
    description: "BMC hỗ trợ audit I-REC, hồ sơ điện sạch, Scope 2 và CBAM cho nhà máy xuất khẩu EU. Kiểm tra miễn phí, phản hồi trong 2 giờ.",
    url: "https://binhminhpower.com",
    siteName: "Bình Minh Power",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dịch vụ I-REC cho nhà máy xuất khẩu EU | CBAM 2026 — Bình Minh Power",
    description: "BMC hỗ trợ audit I-REC, hồ sơ điện sạch, Scope 2 và CBAM cho nhà máy xuất khẩu EU. Kiểm tra miễn phí, phản hồi trong 2 giờ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDV6K2WQ');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-stone-900 bg-[#f7f7f5]" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDV6K2WQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
