import React from 'react'
import image_1 from './images/antiki_x800.jpg'
import image_2 from './images/IMG_7425_kopiera_b62408be-98e0-496d-9f7e-c76e0683f0c7_x800.jpg'
import image_3 from './images/header-1_x800.jpg'
import image_4 from './images/pexels-the-glorious-studio-12026055.jpg'
import image_5 from './images/pexels-steven-arenas-620074.jpg'
import { useState , useRef } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import vid from './images/exibit.mp4'
import ban from './images/pexels-bestbe-models-2301285.jpg'
import { RxCaretDown, RxDot } from 'react-icons/rx'

const banner = [
  {
    img : image_1,
    id: 1,
    subtitle: ' PRE-LOVED & 100% RECYCLED',
    title: 'antique diamonds',
    buttonCaption: 'shop now'
  },
  {
    img : image_2,
    id: 2,
    subtitle: ' unique & individual',
    title: 'just for you',
    buttonCaption: 'one of a kind $ ready to ship'
  },
  {
    img : image_3,
    id: 3,
    subtitle: '',
    title: 'les femmes',
    buttonCaption: 'new collection'
  },
  {
    img : image_4,
    id: 4,
    subtitle: '18k gold bracelet',
    title: 'golden cleo',
    buttonCaption: 'shop now'
  },
  {
    img : image_5,
    id: 5,
    subtitle: 'created by hand',
    title: 'wedding & engagement choker',
    buttonCaption: 'shop now'
  }
];

const Cover = () => {
  const [bannerIndex, setBannerIndex] = useState(4);
  const changeBanner = useRef();
  const addMean = () => {
    changeBanner.current.classList.add('activeda');
  }

  return (
    <>
      <section className='banner w-screen h-full overflow-hidden'>
          <div className='exibit relative bg-black h-[92vh] w-full' style={{ backgroundImage: `url(${banner[bannerIndex].img})`, backgroundSize:'cover' }}>
              <div className='__banner w-full h-full'></div>
              <div className='absolute bottom-[60px] text-white p-5 '>
                <div className='text-md text-gray-200 tracking-widest font-thin'>
                  {banner[bannerIndex].subtitle.toUpperCase()}
                </div>
                <div className=' text-2xl tracking-widest font-thin my-3'>{banner[bannerIndex].title.toUpperCase()}</div>
                <button className='px-10 py-4 text-sm bg-gray-700 tracking-widest'>{banner[bannerIndex].buttonCaption.toUpperCase()}</button>
                <ul className='flex mt-5 text-2xl'>
                  {banner.map((datum) =>  <li key={datum.id}><button ref={changeBanner} onClick={addMean} className='text-white'><RxDot /></button></li>)}
                </ul>
              </div>
             
          </div>
        </section>
    </>
  )
}

export default function Banner() {
  return (
    <>
        <section className='w-screen relative h-[98vh] overflow-hidden'>
              <Cover />
              <div className='absolute bottom-[20px] text-center  w-full text-white px-10 font-bold'>
                <button className='px-3 py-3 bg-slate-100 shadow-sm shadow-slate-500 rounded-full mx-3'>
                  <RxCaretDown className='text-slate-500  text-4xl' />
                </button>
              </div>
              
          
            
        </section>
    </>
  )
}
