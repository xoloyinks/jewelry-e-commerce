import React, { createContext, useContext, useState } from 'react'
import uuid from 'react-uuid'
import { useRef } from 'react'
import { UseContext, Check } from './page'
import ring from "./images/IMG_7162_1400x.jpg"
import bracelet from "./images/fleur-semi-old-cut-0.25_800x.jpg"
import chain from "./images/fleur-semi-old-cut-0.25_800x.jpg"
import trad_anklets from './images/fleur-semi-old-cut-0.25_800x.jpg'
import earring from './images/fleur-semi-old-cut-0.25_800x.jpg'
import { FaHeart, FaRegHeart, FaRegTimesCircle } from 'react-icons/fa'
import {AiFillHeart, AiOutlineCheck, AiOutlineCheckCircle} from 'react-icons/ai'
import {RxCaretLeft, RxCaretRight, RxDot} from 'react-icons/rx'
import { useEffect } from 'react'
import { GiConsoleController } from 'react-icons/gi'


const data = [
    {
        img: earring,
        id: 'pop_one',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_two',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: earring,
        id: 'pop_three',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: 
        earring,
        id: 'pop_four',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_five',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: earring,
        id: 'pop_six',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: earring,
        id: 'pop_seven',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: earring,
        id: 'pop_eight',
        title: 'Twirl pearl Earrings(Italian)',
        price: '20,000'
    },
    {
        img: ring,
        id: 'pop_nine',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: bracelet,
        id: 'pop_ten',
        title: 'The magnificent couple engagement ring',
        price: '200,000'
    },
    {
        img: ring,
        id: 'pop_eleven',
        title: 'The tri Silver Golden Ring for men/women',
        price: '90,000'
    },
    {
        img: chain,
        id: 'pop_twelve',
        title: 'The Paris vail choker eye contact lens',
        price: '50,000'
    },
    {
        img: trad_anklets,
        id: "pop_thirteen",
        title: "Traditional ankle bracelets",
        price: "10,000"
    }
]

console.log(uuid());
const Pop_item = () => {
    return data.map((datum,cart,key) =>  <Each_item key={key} carted={cart} image={datum.img} caption={datum.title} amount={datum.price} id={datum.id} data={datum} />)
}

const Feed_back_success = () => {
    return(
        <>
            <section id='feed_back_success' className='fixed flex px-8 py-2 bg-white rounded-xl tracking-wide -translate-x-[500px] shadow-sm shadow-slate-500 text-[13px] items-center  left-5 max-[640px]:top-[50px] lg:bottom-[20px] h-fit-content w-fit-content'>
                Added to Cart! <AiOutlineCheckCircle className='ml-2 text-2xl' />
            </section>
        </>
    )
}

const Feed_back_remove = () => {
    return(
        <>
            <section id='feed_back_remove' className='fixed flex px-8 py-2 bg-white rounded-xl tracking-wide -translate-x-[500px] shadow-sm shadow-slate-500 text-[13px] items-center  left-5 max-[640px]:top-[50px] h-fit-content w-fit-content lg:bottom-[20px]'>
                Removed from Cart! <FaRegTimesCircle className='ml-2 text-2xl' />
            </section>
        </>
    )
}


const Each_item = ({image ,caption,amount,id,data}) => {
    const [check, setCheck] = useState(false);
    const [cart, setCart] = useContext(UseContext);

    // FUNCTION RUN FOR 'ADD TO CART' BUTTON
    const addItem = (data) => {     
        // ADDING TO CART
        if(cart.length === 0){
            // FEED BACK FOR SUCCESS
            const feed_back_success = document.getElementById('feed_back_success');
            feed_back_success.style.transform = 'translateX(0px)';
            setTimeout(()=> {
                feed_back_success.style.transform = 'translateX(-500px)';
            }, 3000);
            setCart([...cart,data]);
            setCheck(true);
            return;
        }
        // REMOVING FROM CART
        else if(cart.includes(data)){
            const feed_back_remove = document.getElementById('feed_back_remove');
            feed_back_remove.style.transform = 'translateX(0px)';

            setTimeout(()=> {
                feed_back_remove.style.transform = 'translateX(-500px)';
            }, 3000);
            setCart(cart.filter((item) => item.id !== data.id));
            setCheck(!check);
            return;
        }else{
            const feed_back_success = document.getElementById('feed_back_success');
            feed_back_success.style.transform = 'translateX(0px)';
            setTimeout(()=> {
                feed_back_success.style.transform = 'translateX(-500px)';
            }, 3000);
            setCart([...cart,data]);
            setCheck(true);
            return;
        }
    }
    return(
        <>
            <div id={id} className='pop_item flex w-[90vw] h-[fit-content] snap-always snap-center min-[800px]:w-[500px] lg:w-[700px]'>
                <div className='h-full '>
                    <img src={image} alt="Rings" className='w-[100%] h-[75%]' />
                    <div className='py-3 flex w-[70vw] justify-between lg:w-[300px]'>
                        <span className='w-10/12 text-[10px] lg:w-[200px]'>{caption.toUpperCase()}</span>
                        <button id='cart_button' onClick={() => addItem(data)} className=' px-4 text-[20px]'>{check ? <AiFillHeart color='gold' /> :<FaRegHeart />}</button>
                    </div>
                    <div className='text-yellow-600 py'>
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
        <section id='popular' className='w-screen relative h-[fit-ocntent] pt-5 flex flex-col justify-center lg:px-10'>
            <div className='flex items-center w-full p-2 lg:justify-between '>
                <div className='flex items-center'>
                    <h1 className=' border-r-2 border-black font-bold pr-2 text-[14px] tracking-wide lg:text-xl'>MOST POPULAR</h1>
                    <h1 className='w-[fit-content] px-3 text-[9px]'>DISCOVER OUR MOST LOVED ACCESSORIES!</h1>
                </div>
                <button  className='hidden lg:block absolute left-[50px] top-[50%] bg-white p-2 rounded-full shadow-lg shadow-slate-300 text-4xl text-slate-300'><RxCaretLeft /></button>
                <button  className='absolute hidden lg:block  top-[50%] right-[50px] bg-white p-2 rounded-full shadow-lg shadow-slate-300 text-4xl text-slate-300'><RxCaretRight /></button>
            </div>   
            
            <div className='scroll-smooth w-[full] px-2  py-2 lg:flex lg:justify-center'>
                <div id='carousel_control' className='flex flex-nowrap  max-[1020px]:w-[] lg:h-[fit-content] justify-between lg:w-[75vw] overflow-x-scroll snap-x snap-mandatory '>
                        <Pop_item  />
                </div>
            </div>
        </section>
        <Feed_back_success />
        <Feed_back_remove />

    </>
  )
}

