import React from 'react'
import Nav from './nav'
import vid from './images/exibit.mp4'

export default function Banner() {
  return (
    <>
        
        <section className='banner w-screen h-screen overflow-hidden relative'>
            <div className='exibit'>
                <video id='ex' className='w-screen h-screen' src={vid} loop autoPlay="autoplay" muted></video>
            </div>
            <Nav />
        </section>
    </>
  )
}
