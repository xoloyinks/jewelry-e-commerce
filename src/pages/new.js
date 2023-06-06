import React from 'react'
import {createContext, useContext, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { UseContext, Check } from './page'
import { FaRegHeart } from 'react-icons/fa'
import glass from './images/pexels-luana-freitas-1537w8872.jpg'
import necklace from './images/pexels-ashithoshw-u-1413420.jpg'
import pair from './images/pexels-dima-valkov-3266700.jpg'

const data = [
    {
        img: necklace,
        id: 'new_two',
        title: 'Pearl earings with blue thread',
        price: '5,000'
    },
    {
        img: glass,
        id: 'new_one',
        title: 'Simple italian specs with sun protective lens',
        price: '10,000'
    },
    {
        img: pair,
        id: 'new_three',
        title: 'Fenti earings and necklace 2in1 master piece',
        price: '40,000'
    }
]


const New_items = () => {
    const [cart, setCart] = React.useContext(UseContext);
    const [check, setCheck] = useContext(Check);
    return data.map((datum, key) => <Each_item key={key} image={datum.img} title={datum.title} price={datum.price} data={datum} /> )
}

const Each_item = ({image, title, price, data}) => {
    const [check, setCheck] = useState(false);
    const [cart, setCart]= useContext(UseContext);
    const addItem = (data) => {
        if(cart.includes(data)){
            setCart(cart.filter((item) => item.id !== data.id));
            setCheck(!check)
            return;
        }else{
            setCart([...cart,data]);
            setCheck(true)
        }
    }
    return(
        <>
            <div className='flex w-[95%] pop_item snap-always snap-center '>
                <div className='h-full'>
                    <img src={image} id={data.id} alt="Rings" className='h-[400px] lg:h-[fit-content]' />
                    <div className='py-3 flex justify-between'>
                        <span className='w-10/12 text-sm'>{title.toUpperCase()}</span>
                        <button className=' px-4 text-[20px]' onClick={() => addItem(data)}>{check ? <AiFillHeart color='gold' /> :<FaRegHeart />}</button>
                    </div>
                    <div className='py text-yellow-600'>
                        &#x20A6;{price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function New() {
  return (
    <>
        <section className='w-screen h-[fit-content] py-5 lg:px-10'>
            <div className='p-2 flex items-center '>
                <span className='text-[14px] tracking-wide pr-2 font-bold w-[20%] lg:text-xl' >NEW IN</span>
                <span className='text-[9px] text-right w-[78%] border-b-[1px] border-black lg:w-[90%] '><button>See more</button></span>
            </div>
            <div id='carousel_control' className='scroll-smooth w-[full] px-2 overflow-x-scroll snap-x snap-mandatory py-5'>
                <div className='flex flex-nowrap w-[800px] justify-between lg:w-full'>
                    <New_items />
                </div>
            </div>
        </section>
    </>
  )
}
