import React, { useState } from 'react'
import golden from "./images/pexels-fox-998521.jpg"
import diamond from "./images/dia2_d0d0f2ca-e2ea-4344-b409-ab3f2c925a6e_700x.jpg"
import vid from './videos/Pexels-Anastasia-Shuraeva-47395199-4096X2160-24Fps_preview.mp4'




export default function About() {
    const [playVid, setPlayVid] = useState(false);
    window.addEventListener('scroll', reveal)
    function reveal(){
        const about = document.querySelector('.about_text');
        const about_img = document.querySelector('.about_img');
        const about_position = about.getBoundingClientRect().top;

        if(about_position < 600){
            about.style.cssText = 'transform:translateX(0px); transition:1s;'
            about_img.style.cssText = 'transform:translateX(0px); transition:1.5s;'
        }
    }
  return ( 
    <>
        <br id='about'/><br/><br/><br/>
        <section className='overflow-hidden lg:flex lg:justify-around'>
            <div className='about_text -translate-x-[1500px] text-center lg:w-[60%] xl:w-[40%] lg:text-left'>
                <h1 className='text-sm max-[400px]:text-[12px] tracking-widest lg:px-6'>
                    FROM STOCKHOLM, SWEDEN
                </h1>
                <h1 className='tracking-[.25rem] font-[5px] leading-[40px] max-[400px]:text-xl text-2xl w-7/12 mx-auto mt-6 lg:mx-0 lg:px-6 lg:w-full lg:font-thin'>
                    HANDMADE IMPERFECTION
                </h1>
                <h5 className='px-6 py-5 text-sm max-[400px]:text-[12px] leading-[28px] tracking-xl lg:font-thin'>
                Handmade to us is more than just being made by a real person. When we craft things by hand we invest our heart and soul into them!
                <br className='max-[400px]:mt-2'/><br className='max-[380px]:hidden' />
                Our hands not only interpret the qualities and potential of the materials, but translate our imaginations into beautiful jewelry that
                has something to say. Chipped nail polish, smudges and cuts: 
                our hands have a story to tell. That’s why we’re proud to flaunt them and dress them in beautiful creations. We take our craft seriously, 
                but our jewelry isn’t boringly serious. As artisans we combine our hard-won technical knowledge with our playfulness to bring you something
                that will stand the test of time and never go out of style.
                </h5>
            </div>
            <div className='about_img flex translate-x-[1500px] justify-center xl:w-[50%] lg:w-[40%] lg:flex lg:items-center'>
                <img src={diamond} alt="" />
            </div>
            
        </section>
        <div className='vid'>
            <video autoPlay={true} loop muted >
                <source src={vid} type='video/mp4' />
            </video>
        </div>
    </>
  )
}
