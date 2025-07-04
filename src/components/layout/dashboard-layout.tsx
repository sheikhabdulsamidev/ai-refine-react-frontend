"use client"

import { useLocation } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  
  // Check if we're already inside a layout to prevent nesting
  const isNestedLayout = location.pathname.split('/').filter(Boolean).length > 2

  // Only render the layout structure if we're not nested
  if (isNestedLayout) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}