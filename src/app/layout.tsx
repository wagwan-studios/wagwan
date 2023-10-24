import '@/styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import TopBar from "@/components/widgets/top-bar";
import Footer from "@/components/widgets/footer";
import "react-carousel-animated/dist/style.css";
import localFont from "next/font/local";


const beatrice = localFont({
  src: [
    {
      path:'../../public/fonts/beatrice/beatrice-regular.ttf' ,
      weight:'400'
    }
  ],
  display: 'swap',
  variable: '--font-beatrice',
})
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
    <body className={`${beatrice.variable} ${inter.className}`}>
            <TopBar/>
            {children}
            <Footer/>
      </body>
    </html>
  )
}
