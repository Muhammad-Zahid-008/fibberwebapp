import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fibber",
  description: "Welcome to Fibber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative overflow-x-hidden">
        {/* Gradient SVG Background */}
        <div className="fixed top-0 right-0 pointer-events-none z-0">
          <svg width="1121" height="1072" viewBox="0 0 1121 1072" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_439_2727)">
              <ellipse cx="807" cy="304" rx="527" ry="488" fill="url(#paint0_linear_439_2727)" fillOpacity="0.65"/>
            </g>
            <defs>
              <filter id="filter0_f_439_2727" x="0" y="-464" width="1614" height="1536" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_439_2727"/>
              </filter>
              <linearGradient id="paint0_linear_439_2727" x1="1380" y1="-284.5" x2="585.73" y2="758.57" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B8FF"/>
                <stop offset="0.471154" stopColor="#3555FF"/>
                <stop offset="0.942308" stopColor="#C702EF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

