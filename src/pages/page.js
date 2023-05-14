import React from 'react'
import useScrollSnap from 'react-use-scroll-snap'
import { useRef } from 'react'
import Banner from './banner'


export default function Page() {
    const scrollRef = useRef(null);
    useScrollSnap({ref:scrollRef, duration:10, delay:20});
  return (
    <>
        <section ref={scrollRef}>
            <Banner />
            <section className='w-screen h-screen'></section>

        </section>
    </>
  )
}
