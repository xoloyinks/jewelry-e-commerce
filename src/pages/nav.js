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
        document.getElementById('nav').style.cssText = 'background-color:white; transition:0.5s; top:0;';
        document.querySelector('.info').style.cssText = 'display:none';
        document.getElementById('logo').style.cssText = 'color:black;';
        // document.getElementById('bar-1').style.cssText = "border:solid 2px black; background-color:black;";
        // document.getElementById('bar-2').style.cssText = "border:solid 2px black; background-color:black;";
        // document.getElementById('bar-3').style.cssText = "border:solid 2px black; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black;";
        // document.querySelector('.__marked').style.cssText = "color:black; background-color:white;";
    }else{
        document.getElementById('nav').style.cssText = 'background-color: transperent; transition:0.5s;';
        document.querySelector('.info').style.cssText = 'display:block';
        document.getElementById('logo').style.cssText = 'color:black; transition:0.5s;';
        // document.getElementById('bar-1').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        // document.getElementById('bar-2').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        // document.getElementById('bar-3').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black; transition:0.5s;";
        // document.querySelector('.__marked').style.cssText = "color:white;";
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
        <section id='nav' className='nav fixed w-screen'>
            <div className='info p-2 bg-slate-100 text-slate-400 text-[12px] tracking-widest text-center'>
              HANDMADE IN SWEDEN | WORLDWIDE SHIP
            </div>
            <div className='flex items-center justify-between px-3 py-3 '>
                <button onClick={showMenu} className=' h-[fit-content] w-[47px] p-3'>
                    <div className='flex flex-col justify-between w-[27px] h-[24px]'>
                        {/* <div id='bar-1' className='bar border-2 border-black bg-black w-full rounded-full'></div>
                        <div id='bar-2' className='bar border-2 border-black bg-black w-7/12 rounded-full'></div>
                        <div id='bar-3' className='bar border-2 border-black bg-black w-full rounded-full'></div> */}
                        <VscMenu className='text-xl font-bold'/>
                    </div>
                </button>
                <div id='logo' className='text-md  font-bold'> 
                    XayGold 
                </div>
                <div className='w-[50px] flex justify-between text-xl'>
                    <button className='relative p-2' onClick={showCart}>
                        <BsFillBagHeartFill className='cart font-bold text-black' />
                        <span className='__marked flex items-center text-white absolute h-[20px] px-[5px] text-[11px] rounded-full -top-[2px] -right-[0px] font-[10px]'>{cartLength > 0 ? <GoPrimitiveDot className='cart_indicatior text-red-700 text-[13px]'/> : ""}</span>
                    </button>
                </div>
            </div>
        </section>
        <Cart />
    </>
  )
}
