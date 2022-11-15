"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './nav'
import Footer from './footer'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>MTU Jōdō</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
