"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Plus } from "lucide-react"
import { motion } from "framer-motion"

interface FloatingActionButtonProps {
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
}

export function FloatingActionButton({
  onClick,
  icon = <Plus className="h-6 w-6" />,
  className,
}: FloatingActionButtonProps) {
  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button size="icon" className="h-14 w-14 rounded-full shadow-lg" onClick={onClick}>
        {icon}
      </Button>
    </motion.div>
  )
}
