import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

export default function Promotion() {
  return (
    <>
        <section className=' h-[50vh] w-screen xl:h-screen'>
            <div className='promotion relative w-full h-[80%] lg:h-full'>
            <marquee behavior="" direction="left" scrolldelay="1s" className="absolute top-0 px-5 py-[5px] text-black bg-white mt-2 z-50 text-[9px] lg:text-[10px] tracking-widest lg:mt-5 lg:py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A asperiores deleniti nulla. Saepe similique
             deleniti hic optio voluptate vitae deserunt quisquam a. Recusandae pariatur qui sit dicta consequuntur labore non?</marquee>
                <div className='promotion_caption absolute p-5 tracking-wide max-[1020px]:flex max-[1020px]:items-center w-full h-full
                 min-[800px]:flex min-[800px]:flex-col min-[800px]:justify-center min-[800px]:items-start min-[800px]:px-20
                 '>
                    
                    <h1 className='text-[14px] max-[400px]:text-[12px] text-white min-[750px]:w-[40%] w-[80%] lg:w-[50%] xl:w-[42%] lg:text-xl lg:tracking-widest min-[800px]:justify-left'>
                        EARRING IS NOT JUST AN ACCESSORY.
                        IT'S A REFLECTION OF A WOMAN'S 
                        PERSONALITY AND STYLE. 
                    </h1><br className='hidden min-[800px]:block'/><br className='hidden min-[800px]:block'/><br className='hidden min-[800px]:block'/>
                    <h5 className='hidden min-[800px]:block min-[800px]:w-[37%] min-[800px]:text-xs min-[800px]:self-center min-[800px]:text-white min-[800px]:border-l-[2px] min-[800px]:border-gray-300 min-[800px]:p-5 '>
                        From elegant necklaces and statement earrings to delicate
                        bracelets and stunning rings, our jewelry pieces are 
                        designed to make you shine.
                    </h5>
                    <div className='absolute bottom-[30px] max-[400px]:text-[12px] text-[14px] text-gray-200' >
                        CHECK OUT FOR OUR BEST EARRINGS 
                        <button className='px-3 py-3 mx-3 border-2 border-gray-200 rounded-full'>
                            <FaGreaterThan className='text-gray-200' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-5 py-8 max-[400px]:py-5 text-sm max-[400px]:text-[12px] min-[750px]:text-center min-[750px]:mx-auto min-[750px]:w-[60%] min-[800px]:hidden'>
                From elegant necklaces and statement earrings to delicate
                bracelets and stunning rings, our jewelry pieces are 
                designed to make you shine.
            </div>
        </section>
    </>
  )
}
