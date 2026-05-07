"use client"

import { cn } from "@/lib/utils"

interface ProjectActionButtonProps {
  icon: React.ReactNode
  url?: string
  expanded?: boolean
}

export function ProjectActionButton({ icon, url, expanded = false }: ProjectActionButtonProps) {
  return (
    <button
      type="button"
      disabled={!url}
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "backdrop-blur-xl border border-white/20 text-white",
        expanded ? "bg-white/10 border-2" : "bg-white/5",
        "min-w-[30px] px-6 h-10",
        "transition-all duration-300 shadow-lg shadow-black/20",
        "hover:bg-white/30 hover:border-white/50 hover:shadow-xl hover:shadow-black/30 hover:scale-110",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/20 disabled:hover:shadow-lg disabled:hover:scale-100",
        "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
      )}
      onClick={(e) => {
        e.stopPropagation()
        url && window.open(url, '_blank', 'noopener,noreferrer')
      }}
    >
      {icon}
    </button>
  )
}
