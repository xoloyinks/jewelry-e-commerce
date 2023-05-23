import React from 'react'
import { BsBag } from 'react-icons/bs'



const nav_change = () => {
    if(document.documentElement.scrollTop > 50){
        document.getElementById('nav').style.cssText = 'background-color:white; transition:0.5s; top:0;';
        document.querySelector('.info').style.cssText = 'display:none';
        document.getElementById('logo').style.cssText = 'color:black;';
        document.getElementById('bar-1').style.cssText = "border:solid 2px black; background-color:black;";
        document.getElementById('bar-2').style.cssText = "border:solid 2px black; background-color:black;";
        document.getElementById('bar-3').style.cssText = "border:solid 2px black; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black;";
        document.querySelector('.__marked').style.cssText = "color:black; background-color:white;";
    }else{
        document.getElementById('nav').style.cssText = 'background-color: transperent; transition:0.5s;';
        document.querySelector('.info').style.cssText = 'display:block';
        document.getElementById('logo').style.cssText = 'color:black; transition:0.5s;';
        document.getElementById('bar-1').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.getElementById('bar-2').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.getElementById('bar-3').style.cssText = "border:solid 2px black; transition:0.5s; background-color:black;";
        document.querySelector('.cart').style.cssText = "color:black; transition:0.5s;";
        document.querySelector('.__marked').style.cssText = "color:white;";
        return;
    }

}

window.addEventListener('scroll', nav_change, true);

export default function Nav() {
  return (
    <>
        <section id='nav' className='nav fixed w-screen'>
            <div className='info p-3 bg-slate-100 text-slate-400 text-sm tracking-widest text-center'>
              HANDMADE IN SWEDEN | WORLDWIDE SHIP
            </div>
            <div className='flex items-center justify-between px-3 py-5 '>
                <button className=' h-[fit-content] w-[47px] p-3'>
                    <div className='flex flex-col justify-between w-[27px] h-[24px]'>
                        <div id='bar-1' className='bar border-2 border-black bg-black w-full rounded-full'></div>
                        <div id='bar-2' className='bar border-2 border-black bg-black w-7/12 rounded-full'></div>
                        <div id='bar-3' className='bar border-2 border-black bg-black w-full rounded-full'></div>
                    </div>
                </button>
                <div id='logo' className='text-2xl  font-bold'> 
                    Shynel
                </div>
                <div className='w-[50px] flex justify-between text-xl'>
                    <button className='relative p-2'>
                        <BsBag className='cart font-bold text-black' />
                        <span className='__marked flex items-center bg-black text-white absolute h-[20px] px-[5px] text-[11px] rounded-full top-0 right-0 font-[10px]'>0</span>
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}
