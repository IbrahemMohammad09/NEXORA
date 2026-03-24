import React from 'react'
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='relative z-50 flex w-full justify-between items-center p-6'>

            {/* Logo and Home Button */}
            <div className="flex">
                <img className='h-18 w-18' src={logo} />
                <span className="font-open mt-4 text-[30px]">NEXORA</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">

                {/* Solutions Dropdown */}
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    <div className="flex items-center">
                        Solutions
                        <ChevronDown className="px-1 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>

                    {/* Dropdown Menu */}
                    <div className="
                        absolute top-full left-0 mt-2 w-60 
                        bg-slate-900/95 backdrop-blur-md 
                        border border-white/10 rounded-xl p-2 shadow-2x
                        invisible opacity-0 translate-y-2 
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 z-50
                        ">
                        <ul className="space-y-1">
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                Software Development
                            </li>
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                IT Consultancy
                            </li>
                            <li className="px-4 py-2 hover:bg-green-400/20 hover:text-green-400 rounded-lg transition-colors duration-200">
                                Business Automation
                            </li>
                        </ul>
                    </div>
                </div>

                {/* About Button */}
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </div>

                {/* Contact Button */}
                <div className="relative cursor-pointer text-amber-50/80 hover:text-amber-50 transition-all duration-300 group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </div>
            </div>

            {/* Start Button */}
            <button className="
                    flex items-center justify-center gap-1
                    px-4 py-1
                    text-white text-xl font-medium 
                    rounded-xl
                    border border-emerald-500/30 
                    shadow-[0_0_15px_rgba(16,185,129,0.1)]
                    transition-all duration-300 ease-in-out
                    hover:border-emerald-400 
                    hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]
                    
                    active:scale-95
                    before:absolute before:inset-0 before:rounded-xl 
                    before:bg-gradient-to-b before:from-white/10 before:to-transparent 
                    before:pointer-events-none
                    bg-gradient-to-t from-green-400/10 to-green-400/40
                ">
                start <ChevronDown />
            </button>
        </nav>
    )
}

export default Navbar