import { PricingTable } from '@clerk/clerk-react'
import React from 'react'

const Plan = () => {
    return (
        <div id='pricing' className='max-w-2xl mx-auto z-20 my-30' >
            <div className='text-center'>
                <h2 className='text-black text-[42px] font-semibold'>Choose Your Plan</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow.
                    Find the perfect plan for your content creation needs.</p>
            </div>

            <div className="mt-14 max-sm:mx-8">
                <PricingTable />
            </div>
        </div>
    )
}

export default Plan