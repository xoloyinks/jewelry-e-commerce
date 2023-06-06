import React, { createContext, useContext, useState } from 'react'
import { useRef } from 'react'
import { UseContext, Check } from './page'
import ring from "./images/IMG_7162_1400x.jpg"
import bracelet from "./images/fleur-semi-old-cut-0.25_800x.jpg"
import chain from "./images/fleur-semi-old-cut-0.25_800x.jpg"
import trad_anklets from './images/fleur-semi-old-cut-0.25_800x.jpg'
import earring from './images/fleur-semi-old-cut-0.25_800x.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {RxCaretLeft, RxCaretRight, RxDot} from 'react-icons/rx'
import { useEffect } from 'react'


const data = [
    {
        img: earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_one',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: 
        earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_one',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: earring,
        id: 'pop_five',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_one',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: bracelet,
        id: 'pop_two',
        title: 'The magnificent couple engagement ring',
        price: '200,000'
    },
    {
        img: ring,
        id: 'pop_one',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: chain,
        id: 'pop_three',
        title: 'The Paris vail choker eye contact lens',
        price: '50,000'
    },
    {
        img: trad_anklets,
        id: "pop_four",
        title: "Traditional ankle bracelets",
        price: "10,000"
    }
]

const Pop_item = () => {
    return data.map((datum,cart, key) =>  <Each_item key={key} carted={cart} image={datum.img} caption={datum.title} amount={datum.price} id={datum.id} data={datum}  />)
}



const Each_item = ({image ,caption,amount,id,data}) => {
    const [check, setCheck] = useState(false);
    const [cart, setCart] = useContext(UseContext);
    const feed_back = () => {
        return (
            <>
                <section id='feed_back' className='absolute z-50 w-screen h-screen'>
                    adfad
                </section>
            </>
        )
    }

    const addItem = (data) => {
        feed_back();

        if(cart.length === 0){
            setCart([...cart,data]);
            setCheck(true);
        }
        else if(cart.includes(data)){
            setCart(cart.filter((item) => item.id !== data.id));
            setCheck(!check)
            return;
        }else{
            setCart([...cart,data]);
            setCheck(true);
        }
    }
    return(
        <>
            <div id={id} className='pop_item flex w-[90vw] h-[fit-content] snap-always snap-center lg:w-[700px]'>
                <div className='h-full '>
                    <img src={image} alt="Rings" className='w-[100%] h-[75%]' />
                    <div className='py-3 flex w-[70vw] justify-between lg:w-[300px]'>
                        <span className='w-10/12 text-[10px] lg:w-[200px]'>{caption.toUpperCase()}</span>
                        <button id='cart_button' onClick={() => addItem(data)} className=' px-4 text-[20px]'>{check ? <AiFillHeart color='gold' /> :<FaRegHeart />}</button>
                    </div>
                    <div className='py text-yellow-600'>
                        &#x20A6;{amount}
                    </div>
                </div>
            </div>
        </>
    )
}




export default function Popular() {
  return (
    <>
        <section id='popular' className='w-screen h-[fit-ocntent] pt-5 flex flex-col justify-center lg:px-10'>
            <div className='p-2 flex items-center w-full lg:justify-between '>
                <div className='flex items-center'>
                    <h1 className=' border-r-2 border-black font-bold pr-2 text-[14px] tracking-wide lg:text-xl'>MOST POPULAR</h1>
                    <h1 className='w-[fit-content] px-3 text-[9px]'>DISCOVER OUR MOST LOVED ACCESSORIES!</h1>
                </div>
                
                <div className='hidden w-1/12 lg:flex  lg:justify-between'>
                    <button className='text-4xl border-2 border-gray-300 rounded-full text-gray-500'><RxCaretLeft /></button>
                    <button className='text-4xl border-2 border-gray-300 rounded-full text-gray-500'><RxCaretRight /></button>
                </div>
            </div>   
            
            <div className='scroll-smooth w-[full] px-2  py-2 lg:flex lg:justify-center'>
                <div id='carousel_control' className='flex flex-nowrap  max-[1020px]:w-[] lg:h-[fit-content] justify-between lg:w-[75vw] overflow-x-scroll snap-x snap-mandatory '>
                        <Pop_item  />
                </div>
            </div>
        </section>
    </>
  )
}

