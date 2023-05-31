import React from 'react'
import {TfiTwitter} from 'react-icons/tfi'
import {IoLogoInstagram} from 'react-icons/io'
import {SlSocialFacebook} from 'react-icons/sl'


export default function Footer() {
  return (
    <>
                <div className='subscribe flex justify-center items-center h-[45vh] mt-8 text-white px-5'>
                    <form method='post' action='#' className='h-[fit-content] text-center tracking-[.25rem]'>
                        <div className='text-white'>STAY TUNED</div>
                        <div className='text-2xl leading-[35px] my-3'>SIGN UP FOR OUR NEWSLETTER</div>
                        <input type="email" placeholder='Enter your email' className='subscribe_input p-3 w-full transparent border-[1px] border-red-300' />
                        <button className='w-full text-md bg-gray-700 my-5 p-5'>SUBSCRIBE</button>
                    </form>
                </div>
        <section className='py-10 p-5'>
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
