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
            <div className='tpx-10 px-10 text-white top-[200px] absolute'>
              <p className='upgrade text-7xl tracking-wide'>Upgrade</p>
              <p className='text-6xl text-yellow-600 font-bold px-3 tracking-wider'>your style</p>
            </div>
            
            <div className='absolute bottom-[50px] text-white px-10'>
                SHOP NOW!
                <button className='px-5 py-3 border-2 border-white rounded-full mx-3'>
                    <FaGreaterThan className='text-white rotate-90' />
                </button>
            </div>
        </section>
    </>
  )
}
