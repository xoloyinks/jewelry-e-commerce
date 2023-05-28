import React from 'react'
import golden from "./images/pexels-fox-998521.jpg"
import diamond from "./images/dia2_d0d0f2ca-e2ea-4344-b409-ab3f2c925a6e_700x.jpg"

export default function About() {
  return ( 
    <>
        <br id='about'/><br/><br/><br/>
        
        <div className='text-center'>
            <h1 className='tracking-widest text-sm'>
                FROM STOCKHOLM, SWEDEN
            </h1>
            <h1 className='tracking-[.25rem] font-[5px] leading-[40px] text-2xl w-7/12 mx-auto mt-6'>
                HANDMADE IMPERFECTION
            </h1>
            <h5 className='px-6 py-5 text-sm leading-[28px] tracking-xl'>
            Handmade to us is more than just being made by a real person. When we craft things by hand we invest our heart and soul into them!
            <br /><br />
            Our hands not only interpret the qualities and potential of the materials, but translate our imaginations into beautiful jewelry that
             has something to say. Chipped nail polish, smudges and cuts: 
            our hands have a story to tell. That’s why we’re proud to flaunt them and dress them in beautiful creations. We take our craft seriously, 
            but our jewelry isn’t boringly serious. As artisans we combine our hard-won technical knowledge with our playfulness to bring you something
             that will stand the test of time and never go out of style.
            </h5>
        </div>
        <div >
            <img src={diamond} alt="" />
        </div>
        {/* <section className='w-screen py-5 h-[65vh]'>
            <div className='flex justify-between w-full h-full'>
                <div className='w-4/12 relative flex items-center'>
                    <div className=' absolute w-[230%] pl-5'>
                        <h1 className='text-md font-bold tracking-wider'>
                            WE BELIEVE THAT ACCESSORIES
                            ARE THE FINISHING TOUCH TO 
                            ANY OUTFIT AND CAN TRULY
                            TRANSFORM YOUR LOOK
                        </h1>
                        <br />
                        <p className='text-md tracking-wider'>
                            Our jewelry is crafted with the finest materials,
                            including 14K and 18K gold, sterling silver, and 
                            high-quality gemstones, to ensure both beauty 
                            and durability. With our affordable prices and 
                            easy online shopping experience, you can enjoy
                            the convenience of shopping from the comfort of 
                            your own home.
                        </p>
                    </div>
                </div>
                <div className='golden h-full w-7/12'>
                    
                </div>
            </div>
            
        </section> */}
    </>
  )
}
