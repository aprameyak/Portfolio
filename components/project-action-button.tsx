"use client"

import { cn } from "@/lib/utils"

interface ProjectActionButtonProps {
  icon: React.ReactNode
  label?: string
  url?: string
  expanded?: boolean
}

export function ProjectActionButton({ icon, label, url, expanded = false }: ProjectActionButtonProps) {
  return (
    <button
      type="button"
      disabled={!url}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full",
        "min-w-[30px] px-4 h-10",
        "transition-all duration-300 shadow-lg",
        expanded
          ? "border border-border bg-secondary text-foreground shadow-black/10 hover:bg-accent hover:border-purple-accent/50 hover:text-foreground hover:scale-110"
          : "backdrop-blur-xl border border-white/20 text-white bg-white/5 shadow-black/20 hover:bg-white/30 hover:border-white/50 hover:shadow-xl hover:shadow-black/30 hover:scale-110",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      onClick={(e) => {
        e.stopPropagation()
        url && window.open(url, '_blank', 'noopener,noreferrer')
      }}
    >
      {icon}
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  )
}
