import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const chapters = [
  {
    id: 1,
    label: "Chapter I",
    title: "The First Glimpse",
    time: "8:03 PM",
    description:
      "City lights flicker on as the last traces of daylight fade. A lone silhouette steps onto the empty street.",
    tag: "Arrival",
    image:
      "https://i.pinimg.com/736x/28/28/c9/2828c93335ab620c7d96ab31536ed564.jpg",
  },
  {
    id: 2,
    label: "Chapter II",
    title: "Neon Crossroads",
    time: "9:17 PM",
    description:
      "Billboards hum above, casting neon reflections on rain-soaked pavement. A quiet choice changes everything.",
    tag: "Choice",
    image:
      "https://i.pinimg.com/736x/13/76/df/1376dfdf3ca00118cbd69d628f16f5c6.jpg",
  },
  {
    id: 3,
    label: "Chapter III",
    title: "Echoes in the Alley",
    time: "10:42 PM",
    description:
      "Distant sirens and muffled conversations echo through narrow alleys as secrets surface from the dark.",
    tag: "Revelation",
    image:
      "https://i.pinimg.com/1200x/7b/0f/d2/7b0fd2089a7b45dc2a8475beb362998d.jpg",
  },
  {
    id: 4,
    label: "Chapter IV",
    title: "The Last Train",
    time: "11:59 PM",
    description:
      "The station clock freezes for a moment. The last train arrives, but not everyone is meant to board.",
    tag: "Decision",
    image:
      "https://i.pinimg.com/736x/85/7f/74/857f7485f09a1a0ac686b75d657112a2.jpg",
  },
]

function ChapterTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const subtleGlow = useTransform(scrollYProgress, [0, 1], [0.15, 0.4])

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 border-t border-zinc-900"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left intro */}
        <div className="md:w-1/3 space-y-4">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
            Chapter timeline
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Scroll through key moments of the night.
          </h2>
          <p className="text-sm text-zinc-400">
            Each chapter card reacts as you scroll, creating a smooth, cinematic
            narrative without leaving the page.
          </p>

          <motion.div
            style={{ opacity: subtleGlow }}
            className="relative mt-6 h-24 hidden md:block"
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl" />
            <div className="relative flex items-center justify-center h-full">
            </div>
          </motion.div>
        </div>

        {/* Right timeline */}
        <div className="md:w-2/3 relative">
          <div className="space-y-6">
            {chapters.map((chapter, index) => {
              const itemDelay = index * 0.08

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: itemDelay }}
                >
                  <motion.div
                    whileHover={{ y: -4, rotateX: 6, rotateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="transform-gpu group/card"
                  >
                    <Card className="bg-zinc-950/80 border-zinc-800/80 hover:border-emerald-400/80 hover:shadow-[0_30px_120px_rgba(16,185,129,0.35)] transition-all duration-300">
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-stretch gap-4">
                        {/* Image thumbnail */}
                        <div className="relative w-full sm:w-40 h-32 sm:h-auto overflow-hidden rounded-xl">
                          <img
                            src={chapter.image}
                            alt={chapter.title}
                            className="h-full w-full object-cover transform-gpu transition-transform duration-500 group-hover/card:scale-110"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        {/* Text content */}
                        <div className="flex-1 space-y-1 flex flex-col">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
                                {chapter.label}
                              </p>
                              <p className="text-xs text-zinc-500 mt-1">
                                {chapter.time}
                              </p>
                            </div>
                            <span className="hidden sm:inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-emerald-300">
                              {chapter.tag}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-medium mt-1 text-zinc-50">
                            {chapter.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-zinc-400 flex-1">
                            {chapter.description}
                          </p>

                          <div className="pt-2 sm:hidden">
                            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-emerald-300">
                              {chapter.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChapterTimeline
