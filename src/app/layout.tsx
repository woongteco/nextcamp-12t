import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthSession from "./_components/AuthSession";

const notosans = Noto_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | woongteco",
    default: "CHEMEET | woongteco",
  },
  description: "공유하고 배우고 함께 성장하는 케밋!",
  icons: {
    icon: "/favicon.ico",
  },
};

export const generateViewport = (): Viewport => {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    interactiveWidget: "resizes-visual",
    themeColor: "#2A7FFE",
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notosans.className}>
        <Toaster position="bottom-center" />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
