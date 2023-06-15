import React, { useState, useContext, createContext } from 'react'
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'


import img_1 from './images/linneas4_699f7d48-57bb-4108-9c38-07fca86bcfcf_1000x.progressive.jpg'
import img_2 from './images/IMG_3760-kopiera_800x.progressive.jpg'
import img_3 from './images/IMG_6924_1000x.progressive.jpg'
import img_4 from './images/87537189_509160343091683_6500646984112829607_n_700x.progressive.jpg'
import thb_1 from './images/eye_800x.jpg'
import thb_2 from './images/IMG_4024_800x.jpg'
import thb_3 from './images/lestriples-blue_8925cac8-f4e2-40bb-a3b3-321cb630519d_800x.jpg'
import thb_4 from './images/SilverJolies-greenamethyst-web_800x.jpg'

import tr_1 from './images/Screenshot2020-05-22at12.39.20_800x.jpg'
import tr_2 from './images/IMG_3505-desk_1600x.jpg'
import tr_3 from './images/IMG_3037_800x.jpg'
import tr_4 from './images/Screen_Shot_2019-03-22_at_15.07.53_800x.jpg'

const data = [
    img_1,
    img_2,
    img_3,
    img_4
]

const large_data = [
    {
        id:'exp_1',
        image: img_1,
        thumb: thb_1,
        trans_thumb : tr_1,
        caption: 'golden eye',
        carat: '181,300'
    },
    {
        id:'exp_2',
        image: img_2,
        thumb: thb_2,
        trans_thumb : tr_2,
        caption: 'GOLDEN CHARLOTTE',
        carat: '275,400'
    },
    {
        id:'exp_3',
        image: img_3,
        thumb: thb_3,
        trans_thumb : tr_3,
        caption: 'LES TRIPLÉS - EXCLUSIVE BLUE SAPPHIRE + DIAMONDS',
        carat: '1,520,450'
    },
    {
        id:'exp_4',
        image: img_4,
        thumb: thb_4,
        trans_thumb : tr_4,
        caption: 'SILVER JOLIES - GREEN AMETHYST',
        carat: '139,000'
    }
]

const Item = () => {
    return data.map((datum, i) => <img key={i} src={datum} alt="Images" className='explore_image mr-3 snap-always snap-center lg:w-[32%]' /> )
}


const Large_item = ({item}) => {
    return(
                
                    <>
                        <section id={large_data[item].id} className='flex items-center justify-center w-screen my-10'>
                            <div  className='w-[43%] mr-8'>
                                <img  src={large_data[item].image} alt=""  />
                            </div>
                            <div id='exp' className={`${large_data[item].id} w-[30%] text-center relative`}>
                                <img  id='tr_1' src={large_data[item].thumb} alt="" className=' w-[46%] mx-auto' />
                                <img id='tr_2' src={large_data[item].trans_thumb} className={`w-[46%] ${large_data[item].id} mx-auto absolute top-0 left-0 right-0 `} />
                                <br />
                                <div className='text-[13px] w-[80%] mx-auto text-gray-600 tracking-[.25rem]'>
                                    {large_data[item].caption.toUpperCase()}
                                </div>
                                <div className='text-[12px] text-gray-500 tracking-[.25rem] mt-2'>
                                FROM &#x20A6;{large_data[item].carat.toUpperCase()}
                                </div><br /><br />
                                <button className='bg-red-300 px-12 py-3 text-white tracking-[.25rem] text-[12px]'>VIEW THIS PRODUCT</button>
                            </div>
                            
                        </section>
                    </>
                )
    }

export default function Explore() {
    
    const [item, setItem] = useState(0);
    const prevButton = () => {
        if(item === 0){
            setItem(3);
            return;
        }
        setItem(item - 1);
    }
    const nextButton = () => {
        if(item === 3){
            setItem(0);
            return;
        }
        setItem(item + 1);
    }
  return (
    <>
        <section className='py-10 mt-10'>
            <div className='tracking-[.25rem] text-center '>
                <div className='text-sm opacity-80 '>GET INSPIRED</div>
                <div className='my-5 text-2xl'>SHOP THE LOOK</div>
            </div>
            <div className='flex px-8 py-8 mb-5 overflow-x-scroll snap-x snap-mandatory lg:hidden'>
                <Item />
            </div>
            <div className='relative hidden lg:block'>
                <button onClick={prevButton} className='absolute left-[50px] top-[50%] bg-white p-2 rounded-full shadow-lg shadow-slate-300 text-4xl text-slate-300'><RxCaretLeft /></button>
                <button onClick={nextButton} className='absolute top-[50%] right-[50px] bg-white p-2 rounded-full shadow-lg shadow-slate-300 text-4xl text-slate-300'><RxCaretRight /></button>
                <Large_item prevButton={prevButton} item={item} />
            </div>
            <div className='flex justify-center px-8 lg:hidden'>
                <button className='bg-red-300 px-8 py-5 text-white tracking-[.25rem] text-sm w-full'>VIEW PRODUCTS</button>
            </div>
        </section>
    </>
  )
}
