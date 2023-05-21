import React from 'react'
import { BsBag } from 'react-icons/bs'



const nav_change = () => {
    if(document.documentElement.scrollTop > 100){
        document.getElementById('nav').style.cssText = 'background-color:white; transition:0.5s;';
        document.getElementById('logo').style.cssText = 'color:black;';
        document.getElementById('bar-1').style.cssText = "border:solid 2px black; background-color:black;";
        document.getElementById('bar-2').style.cssText = "border:solid 2px black; background-color:black;";
        document.getElementById('bar-3').style.cssText = "border:solid 2px black; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black;";
    }else{
        document.getElementById('nav').style.cssText = 'backdrop-filter:blur(5px); transition:0.5s;';
        document.getElementById('logo').style.cssText = 'color:black; transition:0.5s;';
        document.getElementById('bar-1').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.getElementById('bar-2').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.getElementById('bar-3').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black; transition:0.5s;";
        return;
    }

}

window.addEventListener('scroll', nav_change, true);

export default function Nav() {
  return (
    <>
        <section id='nav' className='nav flex items-center justify-between px-3 py-5 fixed w-screen'>
            <button className=' h-[fit-content] w-[47px] p-3'>
                <div className='flex flex-col justify-between w-[27px] h-[24px]'>
                    <div id='bar-1' className='bar border-2 border-white bg-white w-full rounded-full'></div>
                    <div id='bar-2' className='bar border-2 border-white bg-white w-7/12 rounded-full'></div>
                    <div id='bar-3' className='bar border-2 border-white bg-white w-full rounded-full'></div>
                </div>
            </button>
            <div id='logo' className='text-2xl text-white font-bold'> 
                Shynel
            </div>
            <div className='w-[50px] flex justify-between text-xl'>
                <button className='relative p-2'>
                    <BsBag className='cart font-bold text-white' />
                    <span className='__marked flex items-center bg-white absolute h-[20px] px-[5px] text-[11px] rounded-full top-0 right-0 font-[10px]'>0</span>
                </button>
            </div>
        </section>
    </>
  )
}
