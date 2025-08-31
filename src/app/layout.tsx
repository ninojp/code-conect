import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside/Aside";

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Code Conect",
  description: "Refatorando este Projeto. Agora em React Next.js com TypeScript",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body className={`${prompt.className}`}>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
};
