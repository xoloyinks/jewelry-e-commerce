import React, { useEffect } from 'react'
import Nav from './nav'
import { useRef, useContext, createContext, useState } from 'react'
import Banner from './banner'
import Popular from './popular'
import About from './about'
import New from './new'
import Promotion from './promotion'
import Footer from './footer'
import Categories from './categories'
import Explore from './explore'
import Review from './review'


export default function Page() {
    const scrollRef = useRef(null);
    const [cart, setCart] = useState([]);
    const [check, setCheck] = useState(false);
    const [quantity , setQuantity]= useState(1);


  return (
    <>
        <section ref={scrollRef}>
        <UseContext.Provider value={[cart, setCart]}>
        <Check.Provider value={[check, setCheck]}>
              <Nav />
              <Banner />
              <About className=""/>
            <TotalPrice.Provider value={[quantity, setQuantity]}> 
              <Popular />
              <New />
            </TotalPrice.Provider>
              <Promotion />
              <Categories />
              <Explore />
              <Review />
              <Footer />
        </Check.Provider>
        </UseContext.Provider>
          
        </section>
    </>
  )
}

export const UseContext = React.createContext(null)
export const TotalPrice = React.createContext(null)
export const Check = React.createContext(null)
