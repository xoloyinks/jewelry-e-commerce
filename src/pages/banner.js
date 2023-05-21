import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import vid from './images/exibit.mp4'
import ban from './images/pexels-bestbe-models-2301285.jpg'

export default function Banner() {
  return (
    <>
        <section className='banner w-screen h-screen overflow-hidden relative'>
            <div className='exibit w-screen h-screen'>
                <div className='__banner w-screen h-screen'></div>
            </div>
            <div className='tpx-10 px-5 text-white top-[150px] absolute '>
              <p className='upgrade text-black text-7xl tracking-wide'>Upgrade</p>
              <p className='text-5xl text-yellow-500 font-bold px-5 tracking-wider'>your style.</p>
            </div>
            
            <div className='absolute bottom-[100px] text-white px-10 font-bold'>
                SHOP NOW
                <button className='px-3 py-3 border-2 border-white rounded-full mx-3'>
                    <FaGreaterThan className='text-white rotate-90' />
                </button>
            </div>
        </section>
    </>
  )
}
