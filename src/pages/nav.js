import React, { useState } from 'react'
import { BsBag, BsFillBagHeartFill } from 'react-icons/bs'
import { FaFacebookF, FaPinterest, FaTimes } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi'
import {VscMenu} from 'react-icons/vsc'



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

const hideMenu = () => {
    document.getElementById('navMenuContainer').style.cssText = 'transform:translateX(-500px); transition:0.5s;';
    const body = document.body;
    body.style.position = '';
    body.style.overflowY = '';
}

const showMenu = () => {
    document.getElementById('navMenuContainer').style.cssText = 'transform:translateX(0px); transition:0.5s;';
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '2200px';
    body.style.overflowY = 'hidden';
};




window.addEventListener('scroll', nav_change, true);

export default function Nav() {    
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
        <section id='navMenuContainer' className='-translate-x-[500px] nav_slide overflow-y-scroll fixed h-[fit-content] w-screen'>
            <div className='nav_slide_child relative bg-neutral-500 w-[85%] overflow-y-scroll h-screen text-gray-100 tracking-[.17rem] px-4'>
                <a onClick={hideMenu} className='py-5 px-3 '>
                    <FaTimes className='text-2xl text-neutral-400'/>
                </a>
                <div className='text-[13px]  py-5'>
                    <a href="#" className=' py-5 '>NEW COLLECTION - LES FEMMES</a>
                </div>
                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                {
                    ring.map((data, a) => {
                        return(
                            // NAV MENU CONTAINER FOR RINGS
                            <div className='accordion text-[13px] py-2'>
                                <a key={a} onClick={() => showRing(a)} href="#" className='flex justify-between py-2 w-full '>
                                    <span>
                                        {data.title.toUpperCase()}
                                    </span>
                                    <span className='text-xl'>
                                        {selectedRing === a ? '-' : '+'}
                                    </span>
                                </a>

                                {/* SUB MENU CONTAINER RINGS */}
                                <div className={`${selectedRing === a ? 'sub_accordion show' : 'sub_accordion'} px-5`}>
                                        {data.content_1.map((datum,i) => {
                                            return(
                                                <>
                                                    <a href="#" key={i}  onClick={() => showSub(i)}  className='flex justify-between py-3 w-full text-gray-300 opacity-80'>
                                                        <span>
                                                            {datum.title.toUpperCase()}
                                                        </span>
                                                        <span className='text-xl'>
                                                            {selected === i ? (datum.content.length > 1 ? '-' : ' ') : (datum.content.length > 1 ? '+' : '')}
                                                        </span>
                                                    </a>
                                                    {/* LAST CHILDREN OF MENU FOR RINGS */}
                                                    <div className={`${selected === i ? 'last_accordion show' : 'last_accordion'} px-5 border-l-2 border-gray-400 text-gray-300 tracking-[.02rem] opacity-80`}>
                                                        {datum.content.map((list,x) => {
                                                            return(
                                                                <p className='py-2 ' key={x}><a key={x} href="#" className=''>{list}</a></p>
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
                                <div className='py-2 text-[13px] '>
                                    <a href="#" onClick={() => showAccessories(i)} className='py-2 flex justify-between'>
                                        <span>{data.title.toUpperCase()}</span>
                                        <span className='text-xl'>{selectedAccessories === i ? '-' : '+'}</span>
                                    </a>
                                    <div className={`${selectedAccessories === i ? 'accessories show' : 'accessories'} px-5`}>
                                        {data.content.map((datum, x) => {
                                            return(
                                                <>
                                                    <p>
                                                        <a href="#" className=' py-3 w-full text-gray-300 opacity-80 flex'>
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
                                <div className='py-4'>
                                    <a href="#" key={s} className='text-[13px]'>
                                        {data.toUpperCase()}
                                    </a>
                                </div>
                                <hr className='w-full border-[1px] border-neutral-400 opacity-50'/>
                            </>
                        )
                    })
                }
                <div className='fixed w-[80%]  self-center mx-auto bottom-0 py-3 bg-neutral-500'>
                    <div className='w-[50%] flex items-center justify-between'>
                        <span className='p-3'><a href="#"><FaFacebookF className='text-gray-300'/></a></span>
                        <span>|</span>
                        <span className='p-3'><a href="#"><FiInstagram className='text-gray-300'/></a></span>
                        <span>|</span>
                        <span className='p-3'><a href="#"><FaPinterest className='text-gray-300'/></a></span>
                    </div>
                </div>
            </div>
        </section>

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
                    <button className='relative p-2'>
                        <BsFillBagHeartFill className='cart font-bold text-black' />
                        {/* <span className='__marked flex items-center bg-black text-white absolute h-[20px] px-[5px] text-[11px] rounded-full top-0 right-0 font-[10px]'>0</span> */}
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}
