import React from 'react'
import { BsBag } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

export default function Nav() {
  return (
    <>
        <section className='nav flex items-center justify-between px-3 py-8 fixed w-screen'>
            <button className=' h-[27px] w-[47px]'>
                <div className='flex flex-col justify-between w-[27px] h-full'>
                    <div className='border-2 border-white w-full'></div>
                    <div className='border-2 border-white w-7/12'></div>
                    <div className='border-2 border-white w-full'></div>
                </div>
            </button>
            <div className='text-2xl text-white'> 
                Shynel
            </div>
            <div className='w-[50px] flex justify-between text-xl'>
            <button>
                    <AiOutlineUser color='white' />
                </button>
                <button>
                    <BsBag color='white' />
                </button>
                
            </div>
        </section>
    </>
  )
}
