import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ExitModal from "@/components/shared/modals/exit-modal";
import HeartsModal from "@/components/shared/modals/hearts-modal";
import PracticeModal from "@/components/shared/modals/practice-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo - App",
  description: "Um app para aprender linguas de forma divertida e eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body className={font.className}>
          {children}
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
