import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AIRefine",
  description: "AI-powered content refinement platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  )
}
