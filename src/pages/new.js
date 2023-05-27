import React from 'react'
import {createContext, useContext, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { UseContext } from './page'
import { FaRegHeart } from 'react-icons/fa'
import glass from './images/pexels-el-gringo-photo-165671461.jpg'
import necklace from './images/pexels-ashithosh-u-14134201.jpg'
import pair from './images/pexels-luana-freitas-153788721.jpg'

const data = [
    {
        img: glass,
        id: 'new_one',
        title: 'Simple italian specs with sun protective lens',
        price: '10,000'
    },
    {
        img: necklace,
        id: 'new_two',
        title: 'Pearl earings with blue thread',
        price: '5,000'
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
    return data.map((datum, key) => <Each_item key={key} image={datum.img} title={datum.title} price={datum.price} data={datum} /> )
}

const Each_item = ({image, title, price, data}) => {
    var [check, setCheck] = useState(false);
    const [cart, setCart]= useContext(UseContext);
    const addItem = (data) => {
        if(cart.includes(data)){
            setCheck(!check)
            // console.log('Item already exists');
           
            console.log(cart)
            // console.log(cart.length);
            return;
        }else{
            setCheck(true)
            // console.log('added successfully');
            setCart([...cart,data]);
            // console.log(cart)
        }
    }
    return(
        <>
            <div className='flex w-[95%] pop_item snap-always snap-center '>
                <div className='h-full'>
                    <img src={image} alt="Rings" className='h-[400px]' />
                    <div className='py-3 flex justify-between'>
                        <span className='w-10/12 text-sm'>{title.toUpperCase()}</span>
                        <button className=' px-4 text-[20px]' onClick={() => addItem(data)}>{check ? <AiFillHeart /> :<FaRegHeart />}</button>
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
        <section className='w-screen h-[72vh] py-5'>
            <div className='p-2 flex items-center '>
                <span className='text-[14px] tracking-wide pr-2 font-bold w-[20%]' >NEW IN</span>
                <span className='text-[9px] text-right w-[78%] border-b-[1px] border-black'><button>See more</button></span>
            </div>
            <div id='carousel_control' className='scroll-smooth w-[full] px-2 overflow-x-scroll snap-x snap-mandatory py-5'>
                <div className='flex flex-nowrap w-[800px] justify-between '>
                    <New_items />
                </div>
            </div>
        </section>
    </>
  )
}
