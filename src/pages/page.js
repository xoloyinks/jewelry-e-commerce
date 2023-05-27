import React, { useEffect } from 'react'
import Nav from './nav'
import useScrollSnap from 'react-use-scroll-snap'
import { useRef, useContext, createContext, useState } from 'react'
import Banner from './banner'
import Popular from './popular'
import About from './about'
import New from './new'
import Promotion from './promotion'
import Footer from './footer'


export default function Page() {
    const scrollRef = useRef(null);
    const [cart, setCart] = useState([]);
    const [check, setCheck] = useState(false);


    // useScrollSnap({ref:scrollRef, duration:20, delay:20});
  return (
    <>
        <section ref={scrollRef}>
        <UseContext.Provider value={[cart, setCart]}>
        <Check.Provider value={[check, setCheck]}>
              <Nav />
              <Banner />
              <About />
              <Popular />
              <New />
              <Promotion />
              <Footer />
        </Check.Provider>
        </UseContext.Provider>
          
        </section>
    </>
  )
}

export const UseContext = React.createContext(null)
export const Check = React.createContext(null)
