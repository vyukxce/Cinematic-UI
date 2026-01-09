import HeroSection from "./components/story/HeroSection.jsx"
import ChapterTimeline from "./components/story/ChapterTimeline.jsx"
import EndingSection from "./components/story/endingSection.jsx"
import ParallaxScene from "./components/story/ParallelxScene.jsx"
function App() {
  return (
     <main className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ParallaxScene />
        <ChapterTimeline />
        <EndingSection />
      </div>
    </main>
  )
}

export default App