import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

export default function Promotion() {
  return (
    <>
        <section className=' h-[50vh] w-screen'>
            <div className='promotion relative w-full h-[70%]'>
                <div className='promotion_caption absolute p-5 tracking-wide flex items-center w-full h-full'>
                    <h1 className='text-[14px] text-gray-200 w-[80%]'>
                        EARRING IS NOT JUST AN ACCESSORY.
                        IT'S A REFLECTION OF A WOMAN'S 
                        PERSONALITY AND STYLE. 
                    </h1>
                    <div className='absolute bottom-[30px] text-[14px] text-gray-200' >
                        CHECK OUT FOR OUR BEST EARRINGS 
                        <button className='px-3 py-3 border-2 border-gray-200 rounded-full mx-3'>
                            <FaGreaterThan className='text-gray-200' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-5 py-8'>
                From elegant necklaces and statement earrings to delicate
                bracelets and stunning rings, our jewelry pieces are 
                designed to make you shine.
            </div>
        </section>
    </>
  )
}
