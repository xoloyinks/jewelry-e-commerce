import React, { useEffect, useState } from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import banner from './images/Klarna_Pink_V2_2_900x.jpg'

const data = [
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /Mikel',
        id: 'content_1'
    },
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /XOLO',
        id: 'content_2'
    },
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /Kolawole',
        id: 'content_3'
    },
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /Tobi',
        id: 'content_4'
    },
    {
        text:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto aut perferendis. Repudiandae, dolorum. Doloribus aut consequuntur optio, incidunt eligendi vero iure iste modi veniam exercitationem deserunt necessitatibus qui molestias!" /Yetunde',
        id: 'content_5'
    }
];

window.addEventListener('scroll', reveal)

function reveal(){
    const kay = document.querySelector('.banners');
    var kay_2 = kay.getBoundingClientRect().top;
    if(kay_2 < 750){
        const kay_3 = document.getElementById('banner_x');
        kay_3.style.cssText = 'opacity:1; transform:translateX(0px); transition:1s;';
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
        <section className='bg-red-300 w-screen h-[fit-content] py-16 flex flex-col justify-center items-center lg:py-24' >
            <div id={data[content].id} className='w-[80%] text-sm text-white text-center tracking-widest leading-[30px] lg:w-[40%] lg:text-lg lg:leading-[40px]'>
                {data[content].text}
            </div>
            <div className='mt-16'>
                {data.map((datum, i) => {return(
                    <button key={i} onClick={() => check(i)} className='text-2xl'>{i === content ? <RxDotFilled color='white'/> : <RxDot color='gray' className='opacity-40'/> } </button>
                )}
                )}
            </div>
            
    </section>
    <div className=' text-center tracking-widest py-10 lg:flex lg:justify-between lg:items-center lg:text-left'>
        <div className='lg:px-24 lg:w-[60%]'>
            <h1 className='text-2xl font-light '>
                FLEXIBLE PAYMENT
            </h1>
            <p className='mt-8 text-[11px] tracking-widest leading-[20px]  px-2 lg:px-0  lg:text-md'>
            Fine jewelry made from solid gold, sliver and precious stones is an investment. 
            We partnered with Klarna to provide you with flexible payment options to suit your finances. 
            </p>
        </div>
        <div  className='banners mt-8 overflow-x-hidden'>
            <img src={banner} alt="" id='banner_x' className='opacity-0 translate-x-[100px]' />
        </div>
    </div>
    </>
  )
}
