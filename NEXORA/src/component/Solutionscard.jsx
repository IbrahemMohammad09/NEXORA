import React from 'react'
import { Network, Cog, Monitor } from 'lucide-react'

// Array containing data for each service card
const cardData = [
    {
        icon: <Monitor className='w-16 h-16' style={{ color: '#005649' }} />,
        title: 'Software Development',
        description: 'Custom software systems built for scalability and performance.',
    },
    {
        icon: <Network className='w-16 h-16' style={{ color: '#005649' }} />,
        title: 'IT Consultancy',
        description: 'Technology consulting for digital transformation.',
    },
    {
        icon: <Cog className='w-16 h-16' style={{ color: '#005649' }} />,
        title: 'Business Automation',
        description: 'Streamline operations through advanced automation solutions.',
    },
]

const SolutionsCard = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center overflow-hidden'>
            {cardData.map((card, index) => (
                /* Card Wrapper with Hover Effects */
                <div
                    key={index}
                    className="group mb-8 relative p-[1px] rounded-2xl 
                        bg-gradient-to-r from-blue-400/10 via-transparent to-blue-400/10 
                        mx-4 transition-all duration-1000 w-80 
                        hover:scale-[1.01] hover:-translate-y-2
                        hover:shadow-[0_0_50px_rgba(56,189,248,0.15)]"
                >
                    {/* Animated Meteor Background Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl transition-opacity duration-1000 opacity-0 group-hover:opacity-100 animate-meteor bg-gradient-to-r from-blue-400/20 via-blue-500/10 to-blue-400/20" />

                    {/* Main Card Content Layer */}
                    <div className="relative flex flex-col items-center text-center p-8 rounded-2xl
                        bg-slate-900/60 backdrop-blur-[1px]
                        border border-white/5
                        transition-all duration-500 ease-out
                        transform-gpu"
                    >
                        {/* Service Icon */}
                        {card.icon}
                        
                        {/* Service Title */}
                        <h1 className="text-xl font-semibold text-white mt-4 transition-colors group-hover:text-blue-300">
                            {card.title}
                        </h1>

                        {/* Service Description */}
                        <p className="text-gray-400 mt-3 mb-6 transition-colors group-hover:text-gray-200">
                            {card.description}
                        </p>

                        {/* Action Button */}
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
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SolutionsCard