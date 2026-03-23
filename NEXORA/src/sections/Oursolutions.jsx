import React from 'react'
import Solutionscard from '../component/solutionsCard'

const Oursolutions = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[30px] mb-8'>Our Solutions</h1>
            <Solutionscard />
            <div className='flex flex-col items-center text-[30px] text-center'>
                <h1>Start Using Nexora to Scale and </h1>
                <h1>Automate Your Business</h1>
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
