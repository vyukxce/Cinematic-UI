import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

const endings = {
  none: {
    title: "Every choice writes a different ending.",
    body: "This page is just one version of the night. With a few changes in copy, images, and timing, you can adapt the same layout for any story: games, films, or even your own journey.",
    scene: "Scene · 00:00 — New timeline",
    gradient:
      "from-emerald-500/20 via-cyan-500/10 to-zinc-900 bg-gradient-to-br",
  },
  train: {
    title: "You board the last train into the unknown.",
    body: "The doors close behind you with a soft hiss. Neon streaks past the window as the city slowly falls away, leaving only reflections and unanswered questions.",
    scene: "Scene · 01:12 — Departure track",
    gradient:
      "from-sky-500/25 via-indigo-500/15 to-slate-950 bg-gradient-to-br",
  },
  city: {
    title: "You stay in the city and let the night unfold.",
    body: "The station fades behind you as you walk back into the glow. Every corner looks familiar, but the air feels different—as if the city has been waiting for this choice.",
    scene: "Scene · 01:12 — City loop",
    gradient:
      "from-emerald-500/25 via-lime-400/15 to-zinc-950 bg-gradient-to-br",
  },
}

function EndingSection() {
  const [choice, setChoice] = useState("none")

  const current = endings[choice]

  return (
    <section className="py-12 sm:py-16 border-t border-zinc-900">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
        {/* LEFT: TEXT + CHOICES */}
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
            Epilogue
          </p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={current.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-2xl sm:text-3xl font-semibold"
            >
              {current.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={current.body}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-sm text-zinc-400"
            >
              {current.body}
            </motion.p>
          </AnimatePresence>

          <div className="space-y-2 pt-3">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Choose your ending
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Animated primary choice button */}
              <motion.button
                type="button"
                onClick={() => setChoice("train")}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-xs sm:text-sm font-medium ${
                  choice === "train"
                    ? "bg-sky-400 text-black"
                    : "bg-zinc-100 text-black"
                }`}
              >
                <span className="relative z-10">Board the last train</span>
                <motion.span
                  layoutId="choice-glow"
                  className="pointer-events-none absolute inset-0 bg-linear-to-r from-sky-400 via-cyan-300 to-emerald-300 opacity-40"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  hidden={choice !== "train"}
                />
              </motion.button>

              {/* Animated secondary choice button */}
              <motion.button
                type="button"
                onClick={() => setChoice("city")}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs sm:text-sm font-medium ${
                  choice === "city"
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                    : "border-zinc-700 bg-zinc-950 text-zinc-200"
                }`}
              >
                <span className="relative z-10">Stay in the city</span>
              </motion.button>

              {/* Reset button */}
              <button
                type="button"
                onClick={() => setChoice("none")}
                className="text-xs text-zinc-500 underline-offset-4 hover:underline"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: SCENE CARD */}
        <Card className="bg-zinc-950/70 border-zinc-800/80 overflow-hidden">
          <div className="p-4 sm:p-6 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.scene}
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -6 }}
                transition={{ duration: 0.4 }}
                className={`relative h-40 sm:h-48 rounded-2xl overflow-hidden ${current.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.32),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(15,23,42,0.9),transparent_55%)] opacity-70" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-zinc-100/90 tracking-[0.2em] uppercase text-center px-4">
                    {current.scene}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Use cases
              </p>
              <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
                <li>Game / film landing pages with branching endings.</li>
                <li>Case studies where outcomes change by scenario.</li>
                <li>Personal journeys that react to user choices.</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default EndingSection

