import { motion } from "framer-motion"
import GlowButton from "@/components/ui/glow-button"

const heroTitle = "CINEMATIC STORY EXPERIENCE"

function HeroSection() {
  const scrollToFirstScene = () => {
    const el =
      document.getElementById("parallax-scene") ||
      document.getElementById("chapter-timeline")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToTimeline = () => {
    const el = document.getElementById("chapter-timeline")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6 py-16">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xs tracking-[0.25em] text-zinc-400 uppercase"
      >
        Chapter 0 · Prologue
      </motion.p>

      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
        >
          {heroTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.45), transparent 60%)",
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-center text-sm sm:text-base text-zinc-400"
      >
        A single scrollable night in the neon city. Each section is a frame in
        the film — stitched together with motion, light, and your choices.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap items-center gap-4 mt-2"
      >
        <GlowButton onClick={scrollToFirstScene}>
          Begin the journey
        </GlowButton>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97, y: 0 }}
          onClick={scrollToTimeline}
          className="group relative inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-950/80 px-4 py-2 text-xs sm:text-sm text-zinc-200 hover:border-emerald-400/80 transition-colors"
        >
          <span className="absolute inset-x-4 bottom-1 h-px overflow-hidden">
            <span className="block h-full max-w-0 bg-emerald-400 group-hover:max-w-full transition-all duration-300" />
          </span>

          <span className="relative z-10">View chapter timeline</span>

          <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600/70 bg-zinc-900/80 overflow-hidden">
            <motion.span
              className="text-[0.7rem]"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default HeroSection
