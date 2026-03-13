import './App.css'
import Galaxy from './component/Galaxy '
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* Galaxy Container - Constant in the background */}
      <div className='fixed top-0 left-0 w-full h-full -z-10 bg-black'>
        <Galaxy
          mouseRepulsion
          mouseInteraction={false}
          density={1}
          glowIntensity={0.3}
          saturation={1}
          hueShift={150}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* Page content - placed here and will be above the galaxy */}
      <main className="relative z-10 text-white min-h-[200vh]">
        <Home />
        
      </main>

    </>
  )
}

export default App