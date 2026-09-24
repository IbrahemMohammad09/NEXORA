import React from 'react'
import logo from '../assets/logo.png'

const Herosection = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center  mb-30 mt-5'>
            
            {/* Left side */}
            <div className='md:mr-14'>
                <div className='px-6 pb-6'>
                    <h1 className='text-[40px] md:text-[50px]'>Digital Systems</h1>
                    <h1 className='text-[40px] md:text-[50px]'>& Software</h1>
                </div>
                
                <div className='px-6 pb-6'>
                    <p>Secure scalable digital technologies to power</p>
                    <p>modern platforms & enterprises.</p>
                </div>
                
                <div className='px-6 pb-2'>
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

            {/* Right side */}
            <div className="relative md:ml-14 flex items-center justify-center group">

                {/* 1. Soft backglow effect */}
                <div className="absolute w-64 h-64 bg-[#94f6db]/10 blur-[80px] rounded-full animate-pulse"></div>

                {/* 2. Circular lines around the logo */}
                {/* Dotted outer ring */}
                <div className="absolute w-[90%] h-[90%] md:w-[120%] md:h-[120%] border border-[#94f6db]/20 rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-50"></div>

                {/* Thinner inner ring */}
                <div className="absolute w-[95%] h-[95%] md:w-[100%] md:h-[100%] border border-[#94f6db]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* 3. Radial lines (Light laser) appearing on hover/active */}
                <div className="absolute inset-0 md:inset-[-20px] border-l-2 border-[#94f6db]/0 group-hover:border-[#94f6db]/30 transition-all duration-700 rounded-full rotate-45"></div>
                <div className="absolute inset-0 md:inset-[-20px] border-r-2 border-[#94f6db]/0 group-hover:border-[#94f6db]/30 transition-all duration-700 rounded-full -rotate-45"></div>

                {/* 4. Primary Logo Image */}
                <img
                    className="relative z-10 h-80 w-100 object-contain drop-shadow-[0_0_20px_rgba(148,246,219,0.4)] transition-transform duration-500 group-hover:scale-110"
                    src={logo}
                    alt="Logo"
                />
            </div>
        </div>
    )
}

export default Herosection