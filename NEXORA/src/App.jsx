import './App.css'
import Galaxy from './component/Galaxy '


function App() {


  return (
    <>
      <div className='bg-black' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction={false}
          density={1}
          glowIntensity={0.3}
          saturation={1}
          hueShift={100}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
    </>
  )
}

export default App
