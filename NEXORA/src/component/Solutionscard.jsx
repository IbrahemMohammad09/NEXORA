import React from 'react'
import { MonitorCloud } from 'lucide-react';
import { Network } from 'lucide-react'
import { Cog } from 'lucide-react'

const Solutionscard = () => {

  return (
    <div className='mb-8 flex flex-row'>

      <div className="group relative p-[2px] rounded-2xl 
        bg-gradient-to-r from-transparent to-transparent 
        hover:from-green-400 hover:to-emerald-500
        mx-4
        transition-all duration-500 w-80">

        <div className="flex flex-col items-center text-center p-8 rounded-2xl
          bg-gradient-to-t from-slate-900/10 to-slate-900/95
          transition-all duration-500
          transform-gpu
          group-hover:rotate-1
          group-hover:scale-105
          group-hover:-translate-y-2
          group-hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]"
        >
          <MonitorCloud className='w-16 h-16 text-green-400' />
          <h1 className="text-xl font-semibold text-white">
            Software Development
          </h1>

          <p className="text-gray-300 mt-2">
            Custom software systems built for scalability and performance.
          </p>

          <button className="mt-8 text-lg px-6 py-1 border-2 transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40 hover:bg-green-400/10 hover:border-white hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="group relative p-[2px] rounded-2xl 
        bg-gradient-to-r from-transparent to-transparent 
        hover:from-green-400 hover:to-emerald-500
        mx-4
        transition-all duration-500 w-80">

        <div className="flex flex-col items-center text-center p-8 rounded-2xl
          bg-gradient-to-t from-slate-900/10 to-slate-900/95
          transition-all duration-500
          transform-gpu
          group-hover:rotate-1
          group-hover:scale-105
          group-hover:-translate-y-2
          group-hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]"
        >
          <Network  className='w-16 h-16 text-green-400' />
          <h1 className="text-xl font-semibold text-white">
            IT Consultancy
          </h1>

          <p className="text-gray-300 mt-2">
            Technology consulting for digital transformation.
          </p>

          <button className="mt-8 text-lg px-6 py-1 border-2 transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40 hover:bg-green-400/10 hover:border-white hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="group relative p-[2px] rounded-2xl 
        bg-gradient-to-r from-transparent to-transparent 
        hover:from-green-400 hover:to-emerald-500
        mx-4
        transition-all duration-500 w-80">

        <div className="flex flex-col items-center text-center p-8 rounded-2xl
          bg-gradient-to-t from-slate-900/10 to-slate-900/95
          transition-all duration-500
          transform-gpu
          group-hover:rotate-1
          group-hover:scale-105
          group-hover:-translate-y-2
          group-hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]"
        >
          <Cog className='w-16 h-16 text-green-400' />
          <h1 className="text-xl font-semibold text-white">
            Business Automation
          </h1>

          <p className="text-gray-300 mt-2">
            Streamline operations through advanced automation solutions.
          </p>

          <button className="mt-8 text-lg px-6 py-1 border-2 transition-all duration-300 rounded-lg border-green-400 text-white bg-gradient-to-t from-green-400/10 to-green-400/40 hover:bg-green-400/10 hover:border-white hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:scale-105">
            Learn More
          </button>
        </div>
      </div>


    </div>
  )
}

export default Solutionscard
