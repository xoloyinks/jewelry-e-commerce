import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

export default function Promotion() {
  return (
    <>
        <section className=' h-[50vh] w-screen lg:h-screen'>
            <div className='promotion relative w-full h-[80%] lg:h-full'>
            <marquee behavior="" direction="left" scrolldelay="1s" className="absolute top-0 px-5 py-[5px] text-black bg-white mt-2 z-50 text-[9px] lg:text-[10px] tracking-widest lg:mt-5 lg:py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A asperiores deleniti nulla. Saepe similique
             deleniti hic optio voluptate vitae deserunt quisquam a. Recusandae pariatur qui sit dicta consequuntur labore non?</marquee>
                <div className='promotion_caption absolute p-5 tracking-wide max-[1020px]:flex max-[1020px]:items-center w-full h-full
                 lg:flex lg:flex-col lg:justify-center lg:items-left lg:px-20
                 '>
                    
                    <h1 className='text-[14px] text-white w-[80%] lg:w-[42%] lg:text-xl lg:tracking-widest lg:justify-left'>
                        EARRING IS NOT JUST AN ACCESSORY.
                        IT'S A REFLECTION OF A WOMAN'S 
                        PERSONALITY AND STYLE. 
                    </h1><br className='hidden lg:block'/><br className='hidden lg:block'/><br className='hidden lg:block'/>
                    <h5 className='hidden lg:block lg:w-[37%] lg:text-xs lg:self-center lg:text-white lg:border-l-[2px] lg:border-gray-300 lg:p-5 '>
                        From elegant necklaces and statement earrings to delicate
                        bracelets and stunning rings, our jewelry pieces are 
                        designed to make you shine.
                    </h5>
                    <div className='absolute bottom-[30px] text-[14px] text-gray-200' >
                        CHECK OUT FOR OUR BEST EARRINGS 
                        <button className='px-3 py-3 border-2 border-gray-200 rounded-full mx-3'>
                            <FaGreaterThan className='text-gray-200' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-5 py-8 lg:hidden'>
                From elegant necklaces and statement earrings to delicate
                bracelets and stunning rings, our jewelry pieces are 
                designed to make you shine.
            </div>
        </section>
    </>
  )
}
