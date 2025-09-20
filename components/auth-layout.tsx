"use client"
import { ThemeToggle } from "@/components/theme-toggle"
import type React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Hackathon Boilerplate</h1>
            <p className="mt-2 text-sm text-muted-foreground">Production-ready Next.js starter</p>
          </div>
          <div className="animate-fade-in">{children}</div>
        </div>
      </div>
    </div>
  )
}
