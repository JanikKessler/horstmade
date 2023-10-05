import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/NavBar";
import AuthProvider from "@/app/context/AuthProvider";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <Navbar/>
        <main className="flex justify-center items-start p-6 min-h-screen">
          {children}
        </main>
      </AuthProvider>
      </body>
      </html>
  )
}
