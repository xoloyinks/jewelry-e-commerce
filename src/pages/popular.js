import React from 'react'
import { useRef } from 'react'
import ring from "./images/pexels-fernando-arcos-2044271.jpg"
import bracelet from "./images/pexels-gökhan-yetimova-152917031.jpg"
import chain from "./images/pexels-monstera-69790151.jpg"
import trad_anklets from './images/pexels-curtis-loy-51120131.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'


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
    return data.map((datum, key) =>  <Each_item key={key} image={datum.img} caption={datum.title} amount={datum.price} id={datum.id} />)
}

const Each_item = ({image ,caption,amount,id}) => {
    return(
        <>
            <div id={id} className='flex w-[95%] pop_item snap-always snap-center '>
                <div className='h-full'>
                    <img src={image} alt="Rings" className='h-[420px]' />
                    <div className='py-3 flex justify-between'>
                        <span className='w-10/12 text-sm'>{caption.toUpperCase()}</span>
                        <button className=' px-4 text-[20px]'><FaRegHeart /></button>
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
    const carousel_1 = useRef();
    const carousel_2 = useRef();
    const carousel_3 = useRef();
    const carousel_4 = useRef();

    const carousel_container = document.getElementById('carousel_control');


    const carousel_one = (e) => {
        // e.preventDefault();
        // window.scrollBy(0,500);
        carousel_1.current.classList.add('ticked');
        carousel_2.current.classList.remove('ticked');
        carousel_3.current.classList.remove('ticked');
        carousel_4.current.classList.remove('ticked');
    }
    const carousel_two = () => {
        carousel_1.current.classList.remove('ticked');
        carousel_2.current.classList.add('ticked');
        carousel_3.current.classList.remove('ticked');
        carousel_4.current.classList.remove('ticked');
    }
    const carousel_three = () => {
        carousel_1.current.classList.remove('ticked');
        carousel_2.current.classList.remove('ticked');
        carousel_3.current.classList.add('ticked');
        carousel_4.current.classList.remove('ticked');
    }
    const carousel_four = () => {
        carousel_1.current.classList.remove('ticked');
        carousel_2.current.classList.remove('ticked');
        carousel_3.current.classList.remove('ticked');
        carousel_4.current.classList.add('ticked');
    }
  return (
    <>
        <section id='popular' className='w-screen h-[75vh] pt-5 flex flex-col justify-center'>
            <div className='p-2 flex items-center w-full'>
                <h1 className=' border-r-2 border-black font-bold pr-2 text-[14px] tracking-wide'>MOST POPULAR</h1>
                <h1 className='w-[fit-content] px-3 text-[9px]'>DISCOVER OUR MOST LOVED ACCESSORIES!</h1>
            </div>   
            <div id='carousel_control' className='scroll-smooth w-[full] px-2 overflow-x-scroll snap-x snap-mandatory py-5'>
                <div className='flex flex-nowrap w-[1150px] justify-between '>
                    <Pop_item />
                </div>
            </div>

            <div className='flex justify-center p-5'>
                <a href='#one' onClick={carousel_one} ref={carousel_1} className='carousel rounded-full p-2 mx-[3px]'></a>
                <a href='#two' onClick={carousel_two} ref={carousel_2} className='carousel rounded-full p-2 mx-[3px]'></a>
                <a href='#three' onClick={carousel_three} ref={carousel_3} className='carousel rounded-full p-2 mx-[3px]'></a>
                <a href='#four' onClick={carousel_four} ref={carousel_4} className='carousel rounded-full p-2 mx-[3px]'></a>
                
            </div>
        </section>
    </>
  )
}
