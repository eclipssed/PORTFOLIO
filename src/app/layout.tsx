import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Furqan",
  description:
    "I am a full stack web developer. I use next.js, react.js, node.js, mongodb teachnologies for devloping web applications.",
  icons: {
    // icon: "/favicon.ico", // Path to your favicon.ico
    icon: "/prof-img-modified.png", // Path to your favicon.ico
    shortcut: "/prof-img-modified.png", // Optional, for older browsers
    apple: "/apple-touch-icon.png", // Path to your Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
