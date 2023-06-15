import React, { useEffect, useState } from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import {GiBigDiamondRing} from 'react-icons/gi'
import banner from './images/Klarna_Pink_V2_2_900x.jpg'

const data = [
    {
        text:'"I bought my fiances engagement ring here. incredible service! I was indecisive for the longest time and i wanted everything to be perfect. The employees were very encouraging and helpful without me ever feeling imposed. The entire process was made about me and my fiance beyond satisfied. Sincerely, thank you guys so much for everything! I strongly recommend XOLO YINKS." /Mikel',
        id: 'content_1'
    },
    {
        text:'"I recieved ny new ring today, much quicker than i expected - that was a great surprise! And as we say in French, jel\'aime d\'amour, it is absolutely lovely. I love how the sapphire goes from deep dark blue to sparkling light blue depending on the light. \n I can\'t stop looking at it!" /XOLO',
        id: 'content_2'
    },
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /Kolawole',
        id: 'content_3'
    },
    {
        text:'"All i can say is WOW WOW WOW! You really make a woman\'s dream come true. Thank you so much for all your help and service, we are so happy with our rings!" /Tobi',
        id: 'content_4'
    },
    {
        text:'"Meeting XOLO and his team was a bonus in a city i love. His jewelry is quality and beauty combined. I have continued to add her pieces to my collection over the years, she helped me with a few cusom projects that are amazing as well! XOLO is also one of the nicest people you will meet in Paris. Can\'t wait to be back in her store" /Yetunde',
        id: 'content_5'
    }
];

window.addEventListener('scroll', reveal)

function reveal(){
    const kay = document.querySelector('.banners');
    var kay_2 = kay.getBoundingClientRect().top;
    if(kay_2 < 750){
        const kay_3 = document.getElementById('banner_x');
        kay_3.style.cssText = 'opacity:1; transform:translateX(0px); transition:2s;';
    }
}


export default function Review() {
    const [content, setContent] = useState(0);
    const [color, setColor] = useState('gray');

    const check = (i) => {
        setContent(i);
    }
  return (
    <>
        <section className='relative bg-red-300 overflow-hidden w-screen h-[80vh] py-16 flex flex-col justify-center items-center lg:py-24 lg:h-[100vh]' >
            <div id={data[content].id} className='w-[80%] text-sm text-white text-center tracking-widest leading-[30px] lg:w-[40%] lg:text-lg lg:leading-[40px]'>
                {data[content].text}
            </div>
            <div className='mt-16'>
                {data.map((datum, i) => {return(
                    <button key={i} onClick={() => check(i)} className='text-2xl'>{i === content ? <RxDotFilled color='white'/> : <RxDot color='gray' className='opacity-40'/> } </button>
                )}
                )}
            </div>
            <div className='absolute text-red-200 text-[300px]' style={{ bottom: '-50px',  left:'-100px' }}>
                <GiBigDiamondRing className='rounded-full shadow-md shadow-red-200' />
            </div>
    </section>
    <div className='py-10 tracking-widest text-center lg:flex lg:justify-between lg:items-center lg:text-left'>
        <div className='lg:px-24 lg:w-[60%]'>
            <h1 className='text-2xl font-light '>
                FLEXIBLE PAYMENT
            </h1>
            <p className='mt-8 text-[11px] tracking-widest leading-[20px]  px-2 lg:px-0  lg:text-md'>
            Fine jewelry made from solid gold, sliver and precious stones is an investment. 
            We partnered with Klarna to provide you with flexible payment options to suit your finances. 
            </p>
        </div>
        <div  className='mt-8 overflow-x-hidden banners'>
            <img src={banner} alt="" id='banner_x' className='opacity-0 translate-x-[100px]' />
        </div>
    </div>
    </>
  )
}
