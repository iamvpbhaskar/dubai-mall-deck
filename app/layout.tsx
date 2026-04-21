import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Dubai Mall — World's Most Visited Destination",
  description: "An immersive leasing, sponsorship & events experience at The Dubai Mall.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#080808] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
