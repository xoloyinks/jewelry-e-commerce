import React from 'react'
import Nav from './nav'
import useScrollSnap from 'react-use-scroll-snap'
import { useRef } from 'react'
import Banner from './banner'
import Popular from './popular'
import About from './about'
import New from './new'
import Promotion from './promotion'
import Footer from './footer'


export default function Page() {
    const scrollRef = useRef(null);
    // useScrollSnap({ref:scrollRef, duration:20, delay:20});
  return (
    <>
        <section ref={scrollRef}>
            
            <Nav />
            <Banner />
            <About />
            <Popular />
            <New />
            <Promotion />
            <Footer />
        </section>
    </>
  )
}
