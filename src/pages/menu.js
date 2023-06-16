import React, {useState} from 'react'
import uuid from 'react-uuid';
import { FaFacebookF, FaPinterest, FaTimes } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi'
const ring = [
    {
        title: 'rings',
        content_1 : [
            {
                title: 'gold',
                content: ['Les Femmes','Les Bonbons','Double Bonbons','Les Triples','Les Fleurs','Les jolies','Les Grands','Les Autres','Gold Plain', 'See All']
            },
            {
                title: 'silver',
                content: ['Silver Bonbons', 'Silver jolies', 'Silver Autres', 'Silver Plain', 'See All']
            },
            {
                title: 'stacking collections',
                content: []
            }
        ]
    }
]
const wedding_earrings = [
    {
        title: 'wedding & engagement',
        content: [
            'DIAMONDS', 'ANTIQUE DIAMONDS', '100% RECYCLED DIAMONDS', 'SAPPHIRES','PLAIN','WEDDING RING STACKS','ENGRAVING'
        ]
    },
    {
        title:'earrings',
        content: [
            'GOLD',
            'SILVER'
        ]
    },
    {
        title:'bracelets',
        content: [
            'GOLD',
            'SILVER'
        ]
    },
    {
        title:'necklaces',
        content: [
            'GOLD',
            'SILVER'
        ]
    },
    {
        title:'men',
        content: [
            'BRACELETS',
            'RINGS',
            'NECKLACES'
        ]
    },
    {
        title:'gift card & engraving',
        content: [
            'GIFT CARD',
            'ENGRAVING'
        ]
    }
    
]
const singles = [
    'one of a kind',
   'About & team',
   'our stories',
   'contact'
]

const hideMenu = () => {
    document.getElementById('navMenuContainer').style.cssText = 'transform:translateX(-1300px); transition:0.5s;';
    const body = document.body;
    body.style.position = '';
    body.style.overflowY = '';
}

export default function Menu() {
    const [selected, setSelected] = useState(null);
    const [selectedRing, setSelectedRing] = useState(null);
    const [selectedAccessories, setSelectedAccessories] = useState(null);
    const [sign, setSign] = useState('');
    const showSub = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    } 

    const showRing = (a) => {
        if(selectedRing === a){
            return setSelectedRing(null);
        }
        setSelectedRing(a);
    }

    const showAccessories = (i) => {
        if(selectedAccessories === i){
            return setSelectedAccessories(null);
        }
        setSelectedAccessories(i);
    }
  return (
    <>
        {/* MOBILE NAV SLIDE OUT */}
        <section id='navMenuContainer' className='nav_slide -translate-x-[500px] flex flex-col justify-between bg-neutral-500 overflow-y-scroll fixed h-[100vh] w-[fit-content] lg:-translate-x-[1300px] lg:w-[30%] '>
                
                    <a onClick={hideMenu} className='px-3 py-5 '>
                        <FaTimes className='text-2xl text-neutral-400'/>
                    </a>
                
            <div className='nav_slide_child relative h-[80%] px-4 w-full overflow-y-scroll h-screen text-gray-100 tracking-[.17rem]
             lg: lg:w-full'> 
                <div className='text-[13px] max-[400px]:text-[12px]  py-5 lg:text-[10px] lg:py-5'>
                    <a href="d#" className='py-5 '>NEW COLLECTION - LES FEMMES</a>
                </div>
                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                {
                    ring.map((data, a) => {
                        return(
                            // NAV MENU CONTAINER FOR RINGS
                            <div key={uuid()} className='accordion text-[13px] max-[400px]:text-[12px] py-2 lg:text-[10px]'>
                                <a  onClick={() => showRing(a)} href="#" className='flex items-center justify-between w-full py-2 lg:items-center lg:py-2'>
                                    <span>
                                        {data.title.toUpperCase()}
                                    </span>
                                    <span className='text-xl lg:text-sm'>
                                        {selectedRing === a ? '-' : '+'}
                                    </span>
                                </a>

                                {/* SUB MENU CONTAINER RINGS */}
                                <div className={`${selectedRing === a ? 'sub_accordion show' : 'sub_accordion'} px-5`}>
                                        {data.content_1.map((datum,i) => {
                                            return(
                                                <>
                                                    <a href="#" key={uuid()}  onClick={() => showSub(i)}  className='flex items-center justify-between w-full py-3 text-gray-300 opacity-80 lg:items-center lg:py-2'>
                                                        <span>
                                                            {datum.title.toUpperCase()}
                                                        </span>
                                                        <span className='text-xl lg:text-sm'>
                                                            {selected === i ? (datum.content.length > 1 ? '-' : ' ') : (datum.content.length > 1 ? '+' : '')}
                                                        </span>
                                                    </a>
                                                    {/* LAST CHILDREN OF MENU FOR RINGS */}
                                                    <div className={`${selected === i ? 'last_accordion show' : 'last_accordion'} px-5 border-l-2 border-gray-400 text-gray-300 tracking-[.02rem] opacity-80`}>
                                                        {datum.content.map((list,x) => {
                                                            return(
                                                                <p className='py-2 ' key={uuid()}><a href="#" className=''>{list}</a></p>
                                                            )
                                                        })}
                                                    </div>
                                                </>
                                            )}   
                                        )}
                                </div>
                            </div>
                        )
                    })
                }
                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                
                {/* ACCESSORIES MENU */}
                {
                    wedding_earrings.map((data, i) => {
                        return(
                            <>
                                <div key={uuid()} className='py-2 text-[13px] max-[400px]:text-[12px] lg:text-[10px] lg:py-2'>
                                    <a href="#" onClick={() => showAccessories(i)} className='flex items-center justify-between py-2 lg:py-2'>
                                        <span>{data.title.toUpperCase()}</span>
                                        <span className='text-xl lg:text-sm'>{selectedAccessories === i ? '-' : '+'}</span>
                                    </a>
                                    <div className={`${selectedAccessories === i ? 'accessories show' : 'accessories'} px-5`}>
                                        {data.content.map((datum, x) => {
                                            return(
                                                <>
                                                    <p key={uuid()}>
                                                        <a href="#" className='flex w-full py-3 text-gray-300 opacity-80'>
                                                            <span>{datum}</span>
                                                            <span> </span>
                                                        </a>
                                                    </p>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                            </>
                        )
                    })
                }

                {
                    singles.map((data, s) => {
                        return(
                            <>
                                <div key={uuid()} className='py-4 lg:py-3'>
                                    <a href="#" className='text-[13px] max-[400px]:text-[12px] lg:text-[10px]'>
                                        {data.toUpperCase()}
                                    </a>
                                </div>
                                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                            </>
                        )
                    })
                }
                
            </div>
            <div className='w-[80%] flex items-center mx-auto bottom-0 py-3 bg-neutral-500'>
                    <div className='w-[50%] flex h-[fit-content] items-center justify-between'>
                        <span className='p-3'><a href="#"><FaFacebookF className='text-gray-300'/></a></span>
                        {/* <span>|</span> */}
                        <span className='p-3'><a href="#"><FiInstagram className='text-gray-300'/></a></span>
                        {/* <span>|</span> */}
                        <span className='p-3'><a href="#"><FaPinterest className='text-gray-300'/></a></span>
                    </div>
            </div>
        </section>
    </>
  )
}
