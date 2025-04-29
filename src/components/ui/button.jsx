// === Fichier : src/components/ui/button.jsx ===

export function Button({ children, onClick, type = "button", variant = "default", ...props }) {
  const base = "inline-flex items-center px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}
