import React from 'react'
import Solutionscard from '../component/solutionsCard'

const Oursolutions = () => {
    return (
        /* Added w-full and overflow-hidden to prevent horizontal scroll */
        <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
            
            {/* Section Title */}
            <h1 className='text-[28px] md:text-[35px] mb-12 font-semibold text-white'>
                Our Solutions
            </h1>

            {/* Section Cards Wrapper */}
            <div className='w-full flex justify-center'>
                <Solutionscard />
            </div>

            {/* Section Description & CTA */}
            <div className='flex flex-col items-center px-6 mt-10 text-center max-w-4xl'>
                {/* Using leading-tight to fix line height 
                    and responsive text sizes to prevent overflow 
                */}
                <h2 className='text-[24px] md:text-[40px] leading-tight text-white'>
                    Start Using Nexora to Scale and 
                </h2>
                <h2 className='text-[24px] md:text-[40px] leading-tight mb-8 text-white'>
                    Automate Your Business
                </h2>

                {/* CTA Button */}
                <button className="
                    relative 
                    px-8 py-2 
                    text-white text-xl font-medium 
                    rounded-xl
                    border border-emerald-500/30 
                    shadow-[0_0_15px_rgba(16,185,129,0.1)]
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-400 
                    hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]
                    hover:scale-105
                    active:scale-95
                    before:absolute before:inset-0 before:rounded-xl 
                    before:bg-gradient-to-b before:from-white/10 before:to-transparent 
                    before:pointer-events-none
                    bg-gradient-to-t from-green-400/10 to-green-400/40
                ">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Oursolutions