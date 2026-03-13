import React from 'react'
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (

        <nav className='relative z-50 flex w-full justify-between items-center p-6 '>
            {/* logo and home button */}
            <div className="tracking-wider font-open text-lg text-[30px]">NEXORA</div>
            {/* nav button */}
            <div className="flex gap-4 font-serif">
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    <div className="flex items-center">
                        Solutions
                        <ChevronDown className="px-1 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>

                    {/*Dropdown Menu */}
                    <div className="
                        absolute top-full left-0 mt-2 w-48 
                        bg-slate-900/95 backdrop-blur-md 
                        border border-white/10 rounded-xl p-2 shadow-2xl
                        /* تأثير الظهور */
                        invisible opacity-0 translate-y-2 
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 z-50
                        ">
                        <ul className="space-y-1">
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                Web Development
                            </li>
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                Mobile Apps
                            </li>
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                Cloud Services
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </div>
            </div>
            {/* start button */}
            <button className="flex px-6 py-1 border-2 font-serif transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40  hover:bg-green-400/10  hover:text-white hover:border-white  hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105 ">
                start <div className='pl-1'> <ChevronDown /></div>
            </button>
        </nav>
    )
}

export default Navbar