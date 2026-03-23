import React from 'react'
import logo from '../assets/logo.png'

const Herosection = () => {

    return (
        <div className='flex items-center justify-center mb-30'>
            {/* left side */}
            <div className='mr-14'>
                <div className='px-6 pb-6'>
                    <h1 className='text-[50px]'>Digital Systems</h1>
                    <h1 className='text-[50px]'>& Software</h1>
                </div>
                <div className='px-6 pb-6'>
                    <p>Secure scalable digital technologies to power</p>
                    <p>modern platforms & enterprises.</p>
                </div>
                <div className='px-6 pb-2'>
                    <button className="flex px-6 py-1 border-2  transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40  hover:bg-green-400/10  hover:text-white hover:border-white  hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105 ">
                        Get Started
                    </button>
                </div>
            </div>

            {/* right side */}
            <div className='ml-14'>
                <img className='h-100 w-120' src={logo}/>
            </div>
        </div>
    )
}

export default Herosection
