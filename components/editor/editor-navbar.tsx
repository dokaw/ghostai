"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggle: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggle }: EditorNavbarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-between border-b border-surface-border bg-surface px-3">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggle} className="h-8 w-8">
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5 text-copy-secondary" />
          ) : (
            <PanelLeftOpen className="h-5 w-5 text-copy-secondary" />
          )}
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center" />
    </nav>
  )
}
