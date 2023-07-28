import '@/styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import TopBar from "@/components/widgets/top-bar";
import Footer from "@/components/widgets/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wagwan Studios',
  description: 'Welcome To Wagwan Studios',
}


interface Props {
  children: React.ReactNode
}
export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <TopBar/>
            {children}
            <Footer/>
      </body>
    </html>
  )
}
