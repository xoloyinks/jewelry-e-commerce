import React from 'react'
import uuid from 'react-uuid'
import {createContext, useContext, useState } from 'react'
import {AiFillHeart, AiOutlineCheckCircle} from 'react-icons/ai'
import { UseContext, Check } from './page'
import { FaRegHeart, FaRegTimesCircle  } from 'react-icons/fa'
import glass from './images/pexels-luana-freitas-153788721.jpg'
import necklace from './images/pexels-ashithoshw-u-14134220.jpg'
import pair from './images/pexels-dima-valkov-3266700.jpg'

const data = [
    {
        img: necklace,
        id: 'new_two',
        title: 'Pearl earings with blue thread',
        price: 5000,
        quantity:1
    },
    {
        img: glass,
        id: 'new_one',
        title: 'Simple italian specs with sun protective lens',
        price: 10000,
        quantity:1
    },
    {
        img: pair,
        id: 'new_three',
        title: 'Fenti earings and necklace 2in1 master piece',
        price: 40000,
        quantity:1
    }
]

window.addEventListener('scroll', reveal_new);

function reveal_new(){
    const new_container = document.querySelector('.new_container');
    const new_one = document.getElementById('new_one');
    const new_two = document.getElementById('new_two');
    const new_three = document.getElementById('new_three');

    const new_container_position = new_container.getBoundingClientRect().top;

    if(new_container_position < 600) {
        new_one.style.cssText = 'transform: translateY(0px); transition:0.5s;';
        new_two.style.cssText = 'transform: translateY(0px); transition:1s;';
        new_three.style.cssText = 'transform: translateY(0px); transition:1.5s;';
    }
}

const New_items = () => {
    const [cart, setCart] = React.useContext(UseContext);
    const [check, setCheck] = useContext(Check);
    return data.map((datum, key) => <Each_item key={key} image={datum.img} title={datum.title} price={datum.price} data={datum} /> )
}

const Feed_back_success = () => {
    return(
        <>
            <section id='feed_back_success' className='fixed flex px-8 py-2 bg-white rounded-xl tracking-wide -translate-x-[500px] shadow-sm shadow-slate-500 text-[13px] items-center  left-5 bottom-[20px] h-fit-content w-fit-content'>
                Added to Cart! <AiOutlineCheckCircle className='ml-2 text-2xl' />
            </section>
        </>
    )
}

const Feed_back_remove = () => {
    return(
        <>
            <section id='feed_back_remove' className='fixed flex px-8 py-2 bg-white rounded-xl tracking-wide -translate-x-[500px] shadow-sm shadow-slate-500 text-[13px] items-center  left-5 bottom-[20px] h-fit-content w-fit-content'>
                Removed from Cart! <FaRegTimesCircle className='ml-2 text-2xl' />
            </section>
        </>
    )
}

const Each_item = ({image, title, price, data}) => {
    const [check, setCheck] = useState(false);
    const [cart, setCart]= useContext(UseContext);

    // ADD ITEM TO CART
    const addItem = (data) => {
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
        if(cart.includes(data)){
            const feed_back_remove = document.getElementById('feed_back_remove');
            feed_back_remove.style.transform = 'translateX(0px)';

            setTimeout(()=> {
                feed_back_remove.style.transform = 'translateX(-500px)';
            }, 3000);
            setCart(cart.filter((item) => item.id !== data.id));
            setCheck(!check)
            return;
        }else{
            const feed_back_success = document.getElementById('feed_back_success');
            feed_back_success.style.transform = 'translateX(0px)';
            setTimeout(()=> {
                feed_back_success.style.transform = 'translateX(-500px)';
            }, 3000);
            setCart([...cart,data]);
            setCheck(true)
        }
    }
    return(
        <>
            <div className='overflow-y-hidden flex w-[95%] pop_item snap-always snap-center '>
                <div className='h-full'>
                    <img src={image} id={data.id} alt="Rings" className='h-[400px] max-[400px]:h-[300px] lg:h-[fit-content]' />
                    <div className='flex justify-between py-3'>
                        <span className='w-10/12 text-[10px]'>{title.toUpperCase()}</span>
                        <button className=' px-4 text-[20px]' onClick={() => addItem(data)}>{check ? <AiFillHeart color='gold' /> :<FaRegHeart />}</button>
                    </div>
                    <div className='text-yellow-600 py'>
                        &#x20A6;{price.toLocaleString()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function New() {
  return (
    <>
        <section className='new_container w-screen h-[fit-content] py-5 lg:px-10'>
            <div className='flex items-center p-2 '>
                <span className='text-[14px] tracking-wide pr-2 font-bold w-[20%] lg:text-xl' >NEW IN</span>
                <span className='text-[9px] text-right w-[78%] border-b-[1px] border-black lg:w-[90%] '><button>See more</button></span>
            </div>
            <div id='carousel_control' className='scroll-smooth w-[full] px-2 overflow-x-scroll snap-x snap-mandatory py-5'>
                <div className='flex flex-nowrap max-[400px]:w-[600px] w-[800px] justify-between lg:w-full'>
                    <New_items />
                </div>
            </div>
        </section>
        <Feed_back_success />
        <Feed_back_remove/>
    </>
  )
}
