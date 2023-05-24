import React from 'react'
import {TfiTwitter} from 'react-icons/tfi'
import {IoLogoInstagram} from 'react-icons/io'
import {SlSocialFacebook} from 'react-icons/sl'


export default function Footer() {
  return (
    <>
        <section className='py-10 p-5'>
            <div>
                <h1 className='w-9/12'>
                    SUBSCRIBE TO OUR NEWSLETTER 
                    AND GET 10% DISCOUNT
                </h1>
                <br />
                <div className=''>
                    <form action="" method="get" className='flex justify-between'>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='bg-transperent w border-b-[1px] border-gray-600 w-8/12 tracking-wide' />
                        <button className='px-5 py-3 text-[11px] text-yellow-600 rounded-full border-yellow-600 border-2'>
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
            <br />
            <div className='text-[14px] tracking-wide h-[25vh] flex justify-between'>
                <div className='flex flex-col h-full w-[40%]'>
                    <span className='py-3 font-bold opacity-50 text-yellow-600'>NAVIGATION</span>
                    <a href='#' className='py-3 w-[fit-content]'>ABOUT US</a>
                    <a href='#' className='py-3 w-[fit-content]'>MOST POPULAR</a>
                    <a href='#' className='py-3 w-[fit-content]'>SPECIAL</a>
                    <a href='#' className='py-3 w-[fit-content]'>NEW IN</a>
                </div>
                <div className='flex flex-col h-full w-[40%]'>
                    <span className='py-3 font-bold opacity-50 text-yellow-600'>INFO</span>
                    <a href='#' className='py-3 w-[fit-content]'>CONTACTS</a>
                    <a href='#' className='py-3 w-[fit-content]'>SHIPPING AND PAYMENT</a>
                    <a href='#' className='py-3 w-[fit-content]'>FAQ</a>
                </div>
            </div>
            <br />
            <div className='flex justify-between text-gray-500 text-2xl px-10 py-5 border-b-2 border-gray-500 '>
                <a href='#'><TfiTwitter /></a>
                <a href='#'><IoLogoInstagram /></a>
                <a href='#'><SlSocialFacebook /></a>
            </div>
            <div className='flex justify-between items-center px-2 py-2'>
                <span className='text-[13px]'>&copy; 2023 XOLO. All rights reserved</span>
                <span className='text-[10px]'>Privacy Statement</span>
            </div>
        </section>
    </>
  )
}
