import React from 'react'
import golden from "./images/pexels-fox-998521.jpg"
import diamond from "./images/dia2_d0d0f2ca-e2ea-4344-b409-ab3f2c925a6e_700x.jpg"

export default function About() {
  return ( 
    <>
        <br id='about'/><br/><br/><br/>
        
        <section className='lg:flex lg:justify-around'>
            <div className='text-center lg:w-[40%] lg:text-left'>
                <h1 className='tracking-widest text-sm lg:px-6'>
                    FROM STOCKHOLM, SWEDEN
                </h1>
                <h1 className='tracking-[.25rem] font-[5px] leading-[40px] text-2xl w-7/12 mx-auto mt-6 lg:mx-0 lg:px-6 lg:w-full lg:font-thin'>
                    HANDMADE IMPERFECTION
                </h1>
                <h5 className='px-6 py-5 text-sm leading-[28px] tracking-xl lg:font-thin'>
                Handmade to us is more than just being made by a real person. When we craft things by hand we invest our heart and soul into them!
                <br /><br/>
                Our hands not only interpret the qualities and potential of the materials, but translate our imaginations into beautiful jewelry that
                has something to say. Chipped nail polish, smudges and cuts: 
                our hands have a story to tell. That’s why we’re proud to flaunt them and dress them in beautiful creations. We take our craft seriously, 
                but our jewelry isn’t boringly serious. As artisans we combine our hard-won technical knowledge with our playfulness to bring you something
                that will stand the test of time and never go out of style.
                </h5>
            </div>
            <div className='lg:w-[50%] lg:flex lg:items-center'>
                <img src={diamond} alt="" />
            </div>
        </section>
    </>
  )
}
