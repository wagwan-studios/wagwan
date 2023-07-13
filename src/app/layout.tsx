import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wagwan Studios',
  description: 'Welcome To Wagwan Studios',
}


interface Props {
  children: React.ReactNode
}
export default function RootLayout({
  children
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
