import { motion } from "framer-motion"

function GlowButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.96, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`
        relative inline-flex items-center justify-center overflow-hidden
        rounded-full px-6 py-2.5 text-sm font-medium
        text-zinc-50
        bg-zinc-900/80
        border border-emerald-400/60
        shadow-[0_0_30px_rgba(16,185,129,0.35)]
        backdrop-blur-md
        ${className}
      `}
      {...props}  
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset[2px] rounded-full bg-[conic-gradient(from_120deg,rgba(16,185,129,0.15),rgba(56,189,248,0.35),rgba(16,185,129,0.15))] opacity-70"
      />
      <span
        aria-hidden
        className="absolute inset-[1.5px] rounded-full bg-zinc-950/80"
      />
      <motion.span
        aria-hidden
        initial={{ x: "-150%" }}
        whileHover={{ x: "150%" }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="pointer-events-none absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent blur-md"
      />
      <span className="relative z-10 tracking-wide">{children}</span>
    </motion.button>
  )
}

export default GlowButton

