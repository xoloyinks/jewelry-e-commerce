import React from 'react'
import {TfiTwitter} from 'react-icons/tfi'
import {IoLogoInstagram} from 'react-icons/io'
import {SlSocialFacebook} from 'react-icons/sl'
import {GrAmex} from 'react-icons/gr'
import {RiVisaLine} from 'react-icons/ri'
import {SiMastercard} from 'react-icons/si'
import { FaApplePay,FaPaypal, FaGooglePay } from 'react-icons/fa'


export default function Footer() {
  return (
    <>
                <div className='subscribe flex justify-center items-center h-[fit-content] py-10 mt-8 text-white px-5 lg:py-24'> 
                    <form method='post' action='#' className='h-[fit-content] relative text-center tracking-[.25rem] lg:w-[65%]'>
                        <div className='text-white text-sm opacity-70'>STAY TUNED</div>
                        <div className='text-xl leading-[35px] my-3 text-white opacity-80'>SIGN UP FOR OUR NEWSLETTER</div>
                        <div className='lg:flex lg:w-[80%] lg:justify-around lg:mx-auto lg:items-center'>
                            <input type="email" placeholder='Enter your email' className='subscribe_input p-3 w-full transparent border-[2px] border-white rounded-md tracking-wider lg:w-[60%] lg:py-2 lg:px-3 lg:h-[fit-content]' />
                            <button className='w-full text-sm bg-slate-800 my-5 p-5 rounded-md lg:w-[30%] lg:h-[fit-content] lg:py-4 lg:px-3'>SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
        <section className='py-10 p-5 h-[fit-content]'>
            <br />
            <div className='text-[14px] tracking-wide h-[fit-content] flex justify-between lg:w-[50%]'>
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
            <div className='lg:flex lg:justify-between lg:items-center'>
                <div className='flex justify-between text-gray-500 text-2xl px-10 py-5 border-b-2 border-gray-500 lg:w-[13%] lg:text-lg lg:border-b-0 lg:h-[fit-content] lg:px-0'>
                    <a href='#'><TfiTwitter /></a>
                    <a href='#'><IoLogoInstagram /></a>
                    <a href='#'><SlSocialFacebook /></a>
                </div>
                <div className='flex text-4xl justify-center justify-around pb-10 pt-5 items-center opacity-80 lg:w-[50%] lg:py-5 '>
                    <GrAmex/>
                    <FaApplePay />
                    <FaGooglePay />
                    <FaPaypal className='text-2xl' />
                    <RiVisaLine />
                    <SiMastercard className='text-2xl' />
                </div>
            </div>
            {/* <br /> */}
            <hr />
            <div className='flex justify-between items-center px-2 py-2 lg:px-0'>
                <span className='text-[13px] lg:text-[10px] '> &copy; 2023 XOLO. All rights reserved</span>
                <span className='text-[10px]'>Privacy Statement</span>
            </div>
        </section>
    </>
  )
}
