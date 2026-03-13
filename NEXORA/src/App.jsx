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
        <div>
          {/* 1. Curved Lines Layer (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-60 pointer-events-none translate-y-40"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main glowing line */}
            <path
              d="M-100 300 C 200 100, 1000 500, 1600 200"
              stroke="url(#greenGradient)"
              strokeWidth="4"
              className="blur-[2px] animate-pulse"
            />

            {/* Extra thin line */}
            <path
              d="M-100 320 C 300 150, 1100 450, 1600 250"
              stroke="#4ade80"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
                <stop offset="50%" stopColor="#4ade80" stopOpacity="1" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* 2. Diffuse glow effect to appear over your background */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[200px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div> */}
        </div>
      </div>




      {/* Page content - placed here and will be above the galaxy */}
      <main className="relative z-10 text-white min-h-[200vh]">
        <Home />



      </main>

    </>
  )
}

export default App