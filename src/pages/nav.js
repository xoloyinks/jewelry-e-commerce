import React, { useContext, useEffect, useState } from 'react'
import { UseContext} from './page';
import { BsBag, BsFillBagHeartFill } from 'react-icons/bs'
import { FaFacebookF, FaPinterest, FaTimes } from 'react-icons/fa';
import {GoPrimitiveDot} from 'react-icons/go'
import {FiInstagram} from 'react-icons/fi'
import {VscMenu} from 'react-icons/vsc'
import Cart from './cart';
import Menu from './menu';



const nav_change = () => {
    if(document.documentElement.scrollTop > 50){
        document.getElementById('nav').style.cssText = 'background-color:white; transition:0.5s; top:0; border-bottom:solid #d1d5db 1px;';
        document.querySelector('.info').style.cssText = 'display:none';
        document.getElementById('logo').style.cssText = 'color:#d1d5db; font-weight:bold; font-size:large;';
        document.querySelector('.cart').style.cssText = "color:black;";
    }else{
        document.getElementById('nav').style.cssText = 'background-color: transperent; transition:0.5s; border:none;';
        document.querySelector('.info').style.cssText = 'display:block';
        document.getElementById('logo').style.cssText = 'color:black; transition:0.5s; ';
        document.querySelector('.cart').style.cssText = "color:black; transition:0.5s;";
        return;
    }

}



const showMenu = () => {
    document.getElementById('navMenuContainer').style.cssText = 'transform:translateX(0px); transition:0.5s;';
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '2200px';
    body.style.overflowY = 'hidden';
};

const showCart = () => {
    document.getElementById('cart_container').style.cssText = 'transform:translateX(0px);transition:0.1s;';
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '2200px';
    body.style.overflowY = 'hidden';
}


window.addEventListener('scroll', nav_change, true);

export default function Nav() {    
    const [cart, setCart] = useContext(UseContext);
    const [cartLength, setCartLength] = useState(0);
    const cartChange = () => {
        setCartLength(cart.length);
    }
    window.addEventListener('click' ,cartChange)

    
    
    return (
    <>
        <Menu />
        {/* NAV BAR */}
        <section id='nav' className='fixed w-screen nav'>
            <div className='info p-2 bg-slate-100 text-slate-400 text-[12px] tracking-widest text-center'>
              HANDMADE IN SWEDEN | WORLDWIDE SHIP
            </div>
            <div className='flex items-center justify-between px-3 py-3 '>
                <button onClick={showMenu} className=' h-[fit-content] w-[47px] p-3'>
                    <div className='flex flex-col justify-between w-[27px] h-[24px]'>
                        <VscMenu className='text-xl font-bold lg:text-2xl'/>
                    </div>
                </button>
                <div id='logo' className='font-extrabold text-black text-md lg:text-2xl'> 
                    XOLO YINKS
                </div>
                <div className='w-[50px] flex justify-between text-xl'>
                    <button className='relative p-2' onClick={showCart}>
                        <BsFillBagHeartFill className='font-bold text-black cart' />
                        <span className='__marked flex items-center text-white absolute h-[20px] px-[5px] text-[11px] rounded-full -top-[2px] -right-[0px] font-[10px]'>{cartLength > 0 ? <GoPrimitiveDot className='cart_indicatior text-red-700 text-[13px]'/> : ""}</span>
                    </button>
                </div>
            </div>
        </section>
        <Cart />
    </>
  )
}
