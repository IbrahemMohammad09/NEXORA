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
                <button className="flex mt-8 text-lg px-6 py-1 border-2 transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40  hover:bg-green-400/10  hover:text-white hover:border-white  hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105 ">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Oursolutions
