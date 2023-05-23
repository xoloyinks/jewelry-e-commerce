import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import vid from './images/exibit.mp4'
import ban from './images/pexels-bestbe-models-2301285.jpg'
import { RxCaretDown } from 'react-icons/rx'

export default function Banner() {
  return (
    <>
        <section className='banner bg-slate-100 w-screen h-[98vh] overflow-hidden'>
          <div className='exibit relative bg-black h-[92%] w-full'>
              <div className='__banner w-full h-full'></div>
              <div className='absolute bottom-[60px] text-white p-5 '>
                <div className=' text-2xl tracking-widest font-thin'>LES FEMMES</div>
                <br />
                <button className='px-8 py-3 text-md bg-gray-700 tracking-widest'>NEW COLLECTION</button>
              </div>
              <div className='absolute -bottom-[50px] text-center  w-full text-white px-10 font-bold'>
                <button className='px-3 py-3 bg-slate-100 shadow-sm shadow-slate-500 rounded-full mx-3'>
                  <RxCaretDown className='text-slate-500  text-5xl' />
                </button>
              </div>
          </div>
          
            
        </section>
    </>
  )
}
