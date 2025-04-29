// === Fichier : src/components/ui/sheet.jsx ===

import { useState } from "react"

export function Sheet({ children }) {
  return <>{children}</>
}

export function SheetTrigger({ asChild, children }) {
  return children
}

export function SheetContent({ children, side = "left" }) {
  return (
    <div className={`fixed inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-64 bg-white dark:bg-gray-900 shadow-lg p-4 z-50`}>
      {children}
    </div>
  )
}
