import React, { createContext, useContext, useState } from 'react'
import { useRef } from 'react'
import ring from "./images/pexels-fernando-arcos-2044271.jpg"
import bracelet from "./images/pexels-gökhan-yetimova-152917031.jpg"
import chain from "./images/pexels-monstera-69790151.jpg"
import trad_anklets from './images/pexels-curtis-loy-51120131.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {RxDot} from 'react-icons/rx'
import { useEffect } from 'react'

const UseContext = createContext();

const data = [
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
    const cart = useContext(UseContext);
    return data.map((datum,check,cart, key) =>  <Each_item key={key} check={check} carted={cart} image={datum.img} caption={datum.title} amount={datum.price} id={datum.id} data={datum}  />)
}

const Each_item = ({image ,caption,amount,id,data, check}) => {
    var [check, setCheck] = useState(false);
    const cart = useContext(UseContext);
    const addItem = (data) => {
        if(cart.includes(data)){
            setCheck(!check)
            console.log('Item already exists');
            cart.pop(data);
            // console.log(cart)
            // console.log(cart.length);
            return;
        }else{
            setCheck(true)
            console.log('added successfully');
            cart.push(data);
            // console.log(cart)
        }
    }
    return(
        <>
            <div id={id} className='flex w-[95%] pop_item snap-always snap-center '>
                <div className='h-full'>
                    <img src={image} alt="Rings" className='h-[420px]' />
                    <div className='py-3 flex justify-between'>
                        <span className='w-10/12 text-sm'>{caption.toUpperCase()}</span>
                        <button id='cart' onClick={() => addItem(data)} className=' px-4 text-[20px]'>{check ? <AiFillHeart /> :<FaRegHeart />}</button>
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
    const [cart, setCart] = useState([]);
  return (
    <>
        <section id='popular' className='w-screen h-[75vh] pt-5 flex flex-col justify-center'>
            <div className='p-2 flex items-center w-full'>
                <h1 className=' border-r-2 border-black font-bold pr-2 text-[14px] tracking-wide'>MOST POPULAR</h1>
                <h1 className='w-[fit-content] px-3 text-[9px]'>DISCOVER OUR MOST LOVED ACCESSORIES!</h1>
            </div>   
            <div id='carousel_control' className='scroll-smooth w-[full] px-2 overflow-x-scroll snap-x snap-mandatory py-5'>
                <div className='flex flex-nowrap w-[1150px] justify-between '>
                    <UseContext.Provider value={cart}>
                        <Pop_item  />
                    </UseContext.Provider>
                </div>
            </div>
        </section>
    </>
  )
}
