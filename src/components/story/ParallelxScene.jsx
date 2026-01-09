// src/components/story/ParallaxScene.jsx
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function ParallaxScene() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.95])

  const cardY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const cardRotate = useTransform(scrollYProgress, [0, 1], ["-6deg", "6deg"])

  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"])
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <section
      id="parallax-scene"
      ref={containerRef}
      className="relative py-20 sm:py-24 border-t border-zinc-900"
    >
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950/80 border border-zinc-800/80">
        {/* Background layer */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="pointer-events-none absolute inset-0"
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="h-full w-full bg-linear-to-br from-emerald-500/25 via-cyan-500/10 to-zinc-950" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.8),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(56,189,248,0.7),transparent_55%)]" />
        </motion.div>

        <div className="relative bg-linear-to-t from-black/70 via-black/40 to-black/10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] px-6 sm:px-10 py-16 sm:py-20">
            {/* Left content */}
            <div className="space-y-4 max-w-xl">
              <motion.p
                style={{ y: titleY, opacity: titleOpacity }}
                className="text-xs tracking-[0.25em] text-emerald-300 uppercase"
              >
                Scene · 03 · Street of echoes
              </motion.p>

              <motion.h2
                style={{ y: titleY, opacity: titleOpacity }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
              >
                As you scroll, the city shifts around you.
              </motion.h2>

              <p className="text-sm sm:text-base text-zinc-200/80">
                This section links your scroll directly to the scene. Background
                lights drift slowly while the foreground card moves the other
                way, creating depth without heavy 3D.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400">
                Scroll slowly, then quickly. The motion syncs with your hand,
                turning a static image into a living frame of the story.
              </p>
            </div>

            {/* Right floating card */}
            <motion.div
              style={{ y: cardY, rotate: cardRotate }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="relative h-40 sm:h-52 md:h-56"
            >
              <div className="absolute inset-0 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-emerald-400/30 shadow-[0_18px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.6),transparent_55%)] opacity-70" />
                <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] text-zinc-200/80">
                    <span>Camera · Orbit</span>
                    <span>Parallax: on</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-zinc-100/90">
                      Scroll-linked parallax
                    </p>
                    <p className="text-[0.7rem] text-zinc-200/80">
                      Background: slow drift. <br />
                      Foreground: counter-motion. <br />
                      Title: subtle lift & fade.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[0.65rem] text-zinc-300/80">
                    <span>Depth level · 03</span>
                    <span className="rounded-full border border-zinc-200/40 px-2 py-0.5">
                      Scroll to scrub
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxScene


