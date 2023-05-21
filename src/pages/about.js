import React from 'react'
import golden from "./images/pexels-fox-998521.jpg"

export default function About() {
  return ( 
    <>
        <section className='w-screen py-5 h-[65vh]'>
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
            
        </section>
    </>
  )
}
