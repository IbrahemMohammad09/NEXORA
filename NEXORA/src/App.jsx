import './App.css'
import Home from './pages/Home';
import ConnectedDotsBackground from './component/Particles';

export default function App() {
  return (
    <>

      {/* Galaxy Container - Constant in the background */}
      <div className='fixed top-0 left-0 w-full h-full -z-10 bg-black'>
        {/* <ConnectedDotsBackground /> */}

        {/* Lines */}
        <div>
          {/* Curved Lines Layer (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-80 pointer-events-none translate-y-40"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* New gradient color with the desired color */}
              <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94f6db" stopOpacity="0" />
                <stop offset="50%" stopColor="#94f6db" stopOpacity="1" />
                <stop offset="100%" stopColor="#94f6db" stopOpacity="0" />
              </linearGradient>

              {/* Glow filter to increase line brightness */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main glowing line with glow effect */}
            <path
              d="M-100 300 C 200 100, 1000 500, 1600 200"
              stroke="url(#customGradient)"
              strokeWidth="4"
              filter="url(#glow)" /* Apply glow */
              className="animate-pulse"
            />

            {/* Additional thin line */}
            <path
              d="M-100 320 C 300 150, 1100 450, 1600 250"
              stroke="#94f6db"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Diffuse Glow effect with the new color */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[150px] bg-[#94f6db]/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

      </div>

      {/* Page content - placed here and will be above the galaxy */}
      <main className="relative text-white pb-30">
        <Home />
      </main>

    </>
  );
}