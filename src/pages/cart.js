import React from 'react'
import { UseContext } from './page';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import {BsFillBagHeartFill} from 'react-icons/bs'


const hideCart = () => {
    document.getElementById('cart_container').style.cssText = 'transform:translateX(500px);transition:0.1s;';
    const body = document.body;
    body.style.position = '';
    body.style.overflowY = '';
}

const Cart_item = ({image, title, price}) => {
    return(
        <>
            <section className='w-full py-2 flex h-[fit-content]'>
                <div className={`cart_img w-[30%] flex items-center `}>
                    <img src={image} alt='' className='h-[120px] w-[120px] rounded-lg' />
                </div>
                <div className='w-[70%] py-2 px-2 flex flex-col justify-between '>
                    <div className='py-2 text-sm'>{title}</div>
                    <div className='font-extrabold'>&#x20A6;{price}</div>
                    <div className='flex items-center justify-between  w-5/12 py-2'>
                        <button className='p-2 font-bold text-xl'>-</button>
                        <input id='item_num' type="number" value='1' className=' w-[50%] text-center text-sm font-bold' />
                        <button className='p-2 font-bold text-xl'>+</button>
                    </div>
                </div>
            </section>
            <hr className='border-[1px] border-gray-200 w-full'/>
        </>
    )
}
export default function Cart() {
    const cart = useContext(UseContext);
    
  return (
    <>
        <section id='cart_container' className='w-[100%] translate-x-[500px] fixed overflow-x-hidden overflow-y-scroll h-[100vh]  top-0 right-0'>
           <div className='w-[80%]  px-5 py-5 h-screen overflow-y-scroll bg-white absolute right-0'>
                <div className='fixed py-3 top-0 bg-white w-full'>
                    <div onClick={hideCart} className='py-5 ' >
                        <FaTimes className='text-2xl text-neutral-400'/>
                    </div>
                    <div className='text-xl tracking-wider flex items-center font-bold'>
                        CART <BsFillBagHeartFill className='ml-2 cart font-bold text-black' />
                    </div>
                </div>
                <div className='mt-24'>
                    {
                        cart.map((data, i) => <Cart_item key={i} image={data.img} title={data.title} price={data.price} />)
                    }
                </div>
           </div>
        </section>
    </>
  )
}
