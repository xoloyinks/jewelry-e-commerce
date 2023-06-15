import React, { useEffect } from 'react'
import image_1 from './images/IMG_3505-desk_1600x.jpg'
import image_2 from './images/IMG_7425_kopiera_cda8ab70-508c-45c7-80d4-b0da906269d3_1600x.jpeg'
import image_3 from './images/Studiosession-563_cbe73ea4-2486-4587-8b6f-86a04e31ea79_1600x.jpeg'
import image_4 from './images/pexels-the-glorious-studio-1202605w5.jpg'
import image_5 from './images/cleo-lilac_kopiera_160d0x.jpeg'
import { useState , useRef } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import vid from './images/exibit.mp4'
import ban from './images/pexels-bestbe-models-2301285.jpg'
import { RxCaretDown, RxDot, RxDotFilled } from 'react-icons/rx'
import { BsFillFileEarmarkRichtextFill } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'

const banner = [
  {
    img : image_1,
    face: 'one',
    id: 1,
    subtitle: ' PRE-LOVED & 100% RECYCLED',
    title: 'antique diamonds',
    buttonCaption: 'shop now'
  },
  {
    img : image_5,
    face: 'five',
    id: 5,
    subtitle: '18k gold bracelet',
    title: 'golden cleo ',
    buttonCaption: 'shop now'
  },
  {
    img : image_2,
    face: 'two',
    id: 2,
    subtitle: ' unique & individual',
    title: 'just for you',
    buttonCaption: 'one of a kind $ ready to ship'
  },
  {
    img : image_3,
    face: 'three',
    id: 3,
    subtitle: 'Desperado',
    title: 'les femmes',
    buttonCaption: 'new collection'
  },
  {
    img : image_4,
    face: 'four',
    id: 4,
    subtitle: 'Freezy freeze ice chain',
    title: 'Lasty Fragments',
    buttonCaption: 'shop now'
  }
  
  
];

const getHeight = window.innerHeight + 'px';

const Cover = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [classControl, setClassControl] = useState(2);
  const [secControl, setSecControl] = useState(0);
  const [assureChange, setAssureChange] = useState(true);
  const [count , setCount] = useState(0);
  const changeBanner = useRef([]);
  changeBanner.current = [];


  const addMean = (el) => {
    if(el && !changeBanner.current.includes(el)){
      changeBanner.current.push(el);
    }
  }
  
  const refClick = (index) => {
    setBannerIndex(index);
    setClassControl(bannerIndex);
    changeBanner.current[index].classList.add('active');
    // changeBanner.current[index].setAssureChange(!assureChange);
    if(bannerIndex === 0 && index === 0){
      setBannerIndex(1);
      return;
    }
    if(bannerIndex === index){
      setBannerIndex(0);
      return;
    }
    

    if(classControl !== index){
      changeBanner.current[classControl].classList.remove('active');
    }
    console.log(bannerIndex);
    console.log(index);
    console.log(changeBanner.current[index])
  }

  useEffect(() => {
    changeBanner.current[0].classList.add('active');
  }, []);

  useEffect(() => {
      setAssureChange(classControl)
      if(classControl === bannerIndex) return;
      changeBanner.current[classControl].classList.remove('active');
  }, [classControl])

  if(bannerIndex > 4){
    setBannerIndex(0);
    return;
  }
    
  setTimeout(() => {
      // console.log(bannerIndex);
      setBannerIndex(bannerIndex + 1);
      
  }, 10000);
    return(
        <>
            <section  className='banner w-screen h-full overflow-hidden lg:h-[95vh] lg:overflow-hidden'>
              <div id={banner[bannerIndex].face + banner[bannerIndex].id} className={`exibit relative bg-black w-full lg:h-full`} style={{ backgroundImage: `url(${banner[bannerIndex].img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:`${getHeight}` }}>
                <div className='w-full h-full __banner'></div>
                <div id={banner[bannerIndex].face} className='caption absolute w-full bottom-[120px] text-white p-5 lg:px-20 lg:bottom-[80px]'>
                  <div className='font-thin tracking-widest text-gray-200 text-md lg:text-sm'>
                    {banner[bannerIndex].subtitle.toUpperCase() || banner[secControl].subtitle.toUpperCase()}
                  </div>
                  <div className=' text-2xl tracking-widest font-thin my-3 lg:my-6 md:text-xl lg:tracking-[.25rem]'>{banner[bannerIndex].title.toUpperCase() || banner[secControl].title.toUpperCase()}</div>
                  <button className='px-10 py-4 text-sm tracking-widest bg-red-300 lg:text-xs'>{banner[bannerIndex].buttonCaption.toUpperCase() || banner[secControl].buttonCaption.toUpperCase()}</button>
                  
                </div>
                
              </div>
              <ul className='absolute bottom-[50px] right-0 px-3 flex mt-5 text-xl lg:bottom-[40px] lg:px-[70px] '>
                {banner.map((datum,index) => <li key={index}><button  key={index} ref={addMean} onClick={() => refClick(index)} className='carousel_button'>{assureChange ? <RxDot /> : <RxDotFilled/>}</button></li>)}
              </ul>
            </section>
        </>)
}
setTimeout(() => {
  document.getElementById('message').style.cssText = 'display:block; transition:0.5s;';
}, 30000)

export default function Banner() {
  return (
    <>
        <section className='check w-screen relative h-[100vh] overflow-hidden '>
              <Cover />
              
              <div id='message' className='fixed hidden text-[13px] bottom-[20px] right-[15px] bg-white rounded-xl tracking-wide shadow-sm shadow-slate-500'>
                  <a href="#" className='flex items-center px-2 py-2'>
                   <GoPrimitiveDot className='mr-2 text-blue-500'/> Message us
                  </a>
              </div>
              
              <div>

              </div>
        </section>
        <div className='direction absolute flex justify-center bottom-[0px] h-[5vh] bg-white  text-center  w-full text-white px-10 font-bold lg:bottom-[0px]'>
                <a href='#about' className='px-3 py-3 w-[fit-content] absolute bottom-[12px] bg-slate-100 shadow-sm shadow-slate-500 rounded-full mx-3 h-[fit-content] lg:bottom-[20px]'>
                    <RxCaretDown className='text-4xl text-slate-500 lg:text-2xl' />
                </a>
              </div>
    </>
  )
}
