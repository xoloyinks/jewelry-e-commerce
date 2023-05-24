import React, { useEffect } from 'react'
import image_1 from './images/pexels-wallace-chuck-20848101.jpg'
import image_2 from './images/IMG_7425_kopiera_b62408be-98e0-496d-9f7e-c76e0683f0c7_x800.jpg'
import image_3 from './images/header-1_x800.jpg'
import image_4 from './images/pexels-the-glorious-studio-120260551.jpg'
import image_5 from './images/pexels-steven-arenas-6200741.jpg'
import { useState , useRef } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import vid from './images/exibit.mp4'
import ban from './images/pexels-bestbe-models-2301285.jpg'
import { RxCaretDown, RxDot, RxDotFilled } from 'react-icons/rx'
import { BsFillFileEarmarkRichtextFill } from 'react-icons/bs'

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
    subtitle: '...',
    title: 'les femmes',
    buttonCaption: 'new collection'
  },
  {
    img : image_4,
    face: 'four',
    id: 4,
    subtitle: '18k gold bracelet',
    title: 'golden cleo',
    buttonCaption: 'shop now'
  },
  {
    img : image_5,
    face: 'five',
    id: 5,
    subtitle: 'created by hand',
    title: 'wedding & engagement choker',
    buttonCaption: 'shop now'
  }
];

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
      // changeBanner.current[classControl].classList.remove('active');
    }
    // console.log(bannerIndex);
    // console.log(index);
    // console.log(changeBanner.current[index])
  }

  // useEffect(() => {
  //   changeBanner.current[0].classList.add('active');
  // }, []);

  // useEffect(() => {
  //     // setAssureChange(classControl)
  //     if(classControl === bannerIndex) return;
  //     changeBanner.current[classControl].classList.remove('active');
  // }, [classControl])

  if(bannerIndex > 4){
    setBannerIndex(0);
    return;
  }
    
  setTimeout(() => {
      // console.log(bannerIndex);
      setBannerIndex(bannerIndex + 1);
      
  }, 10000)
    return(
      banner.map((datum, index) => { return(
        <>
            <section key={index} className='banner w-screen h-full overflow-hidden'>
              <div id={banner[bannerIndex].face + banner[bannerIndex].id} className='exibit relative bg-black h-[92vh] w-full' style={{ backgroundImage: `url(${banner[bannerIndex].img})`, backgroundSize:'cover' }}>
                <div className='__banner w-full h-full'></div>
                <div id={banner[bannerIndex].face} className='caption absolute w-full bottom-[80px] text-white p-5'>
                  <div className='text-md text-gray-200 tracking-widest font-thin'>
                    {banner[bannerIndex].subtitle.toUpperCase() || banner[secControl].subtitle.toUpperCase()}
                  </div>
                  <div className=' text-2xl tracking-widest font-thin my-3'>{banner[bannerIndex].title.toUpperCase() || banner[secControl].title.toUpperCase()}</div>
                  <button className='px-10 py-4 text-sm bg-gray-700 tracking-widest'>{banner[bannerIndex].buttonCaption.toUpperCase() || banner[secControl].buttonCaption.toUpperCase()}</button>
                  
                </div>
                
              </div>
              <ul className='absolute bottom-[70px] flex mt-5 text-3xl'>
                    {banner.map((datum,index) => <li key={index}><button disabled key={index} ref={addMean} onClick={() => refClick(index)} className='carousel_button'>{assureChange ? <RxDot /> : <RxDotFilled/>}</button></li>)}
                </ul>
            </section>
        </>)
      })
    )
}

export default function Banner() {
  return (
    <>
        <section className='check w-screen relative h-[98vh] overflow-hidden'>
              <Cover />
              <div className='absolute flex justify-center bottom-[20px]  text-center  w-full text-white px-10 font-bold'>
                <a href='#about' className='px-3 py-3 w-[fit-content] bg-slate-100 shadow-sm shadow-slate-500 rounded-full mx-3'>
                  <RxCaretDown className='text-slate-500  text-4xl' />
                </a>
              </div>
              
          
            
        </section>
    </>
  )
}
