import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stories Behind the Scenes: Latest Movie Recommendations",
  description:
    "Take a journey into the magical world of cinema! Create unforgettable moments for movie enthusiasts with our carefully selected movie recommendations. Enjoy watching!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-neutral-900 text-neutral-100">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
