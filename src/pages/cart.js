import React, { createContext, useEffect, useState } from 'react'
import { UseContext, Check } from './page';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import {BsFillBagHeartFill} from 'react-icons/bs'


const hideCart = () => {
    document.getElementById('cart_container').style.cssText = 'transform:translateX(1500px);transition:0.1s;';
    const body = document.body;
    body.style.position = '';
    body.style.overflowY = '';
}

const Cart_item = ({image, title, price,id,datum, removeItem}) => {
    const cart = useContext(UseContext);
    const [quantity, setQuantity] = useState(1)
    return(
        <>
            <section className='w-full py-2 flex h-[fit-content]'>
                <div className={`cart_img w-[30%] flex items-center `}>
                    <img src={image} alt='' className='h-[120px] w-[120px] rounded-lg' />
                </div>
                <div className='w-[70%] py-2 px-2 flex flex-col justify-between '>
                    <div className='py-2 text-sm'>{title}</div>
                    <div className='font-extrabold'>&#x20A6;{price}</div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center justify-between w-7/12 py-2'>
                            <button onClick={() => quantity <= 1 ? quantity :setQuantity(parseInt(quantity) - 1)} className='py-0 px-2 rounded-full font-bold text-xl border-2 border-gray-100 text-gray-500 h-[fit-content]'>-</button>
                            <input id='item_num' type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className=' w-[30%] text-center text-sm font-bold' />
                            <button onClick={() => setQuantity(parseInt(quantity) + 1)} className='px-2 py-0 text-xl font-bold text-gray-500 border-2 border-gray-100 rounded-full'>+</button>
                        </div>
                        <button onClick={() => removeItem(id)} className='text-sm text-gray-400'>Remove</button>
                    </div>
                </div>
            </section>
            <hr className='border-[1px] border-gray-200 w-full'/>
        </>
    )
}
export default function Cart() {
    const [cart, setCart] = useContext(UseContext);
    const [check, setCheck] = useContext(Check);
    
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        // setCheck(!check);
    }
    const emptyArray = () => {
        setCart(cart.length = []);
    }
    // cart =  carted;
    
    
  return (
    <>
        <section id='cart_container' className=' w-[100%] translate-x-[1500px] fixed overflow-x-hidden overflow-y-scroll h-[100vh]  top-0 right-0 lg:translate-x-[1500px]'>
           <div className='cart-box w-[80%] px-5 pt-5 pb-16 h-screen overflow-y-scroll bg-white absolute right-0 min-[750px]:w-[50%] lg:w-[40%] xl:w-[30%]'>
                <div className='fixed top-0 w-full py-3 bg-white'>
                    <div onClick={hideCart} className='py-5 ' >
                        <FaTimes className='text-2xl text-neutral-400'/>
                    </div>
                    <div className='text-lg w-[70%] text-gray-400 tracking-wider flex justify-between items-center lg:text-sm'>
                        <span>MY CART ({cart.length} items)</span> <BsFillBagHeartFill className='ml-2 font-bold cart' />
                    </div>
                </div>
                
                <div className='mt-24'>
                    {
                       cart.length > 0 ? cart.map((data, i) => <Cart_item key={i} id={data.id} image={data.img} title={data.title} price={data.price} datum={data} removeItem={removeItem} />) : <span className='text-xl'>Cart is Empty!</span>
                    }
                </div>
                <div className='my-5'>
                    {
                        cart.length > 0 
                        ?
                            <div className='fixed bottom-0 pb-20 pt-3 bg-white lg:pb-5 lg:w-[100%]'>
                                <button className='px-3 py-2 text-white bg-red-300 rounded-lg lg:text-sm'>Confirm order</button>
                                <button onClick={emptyArray} className='px-3 py-2 ml-3 text-white bg-red-600 rounded-lg lg:text-sm'>Empty Cart</button>
                            </div>

                        : 
                            <div className=''>
                                <button onClick={hideCart} className='px-5 py-2 text-white bg-red-300 rounded-lg lg:text-sm' >Explore Now</button>
                            </div>
                     }
                </div>
                
                
           </div>
        </section>
    </>
  )
}

