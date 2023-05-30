import React from 'react'
import img_1 from './images/linneas4_699f7d48-57bb-4108-9c38-07fca86bcfcf_1000x.progressive.jpg'
import img_2 from './images/IMG_3760-kopiera_800x.progressive.jpg'
import img_3 from './images/IMG_6924_1000x.progressive.jpg'
import img_4 from './images/87537189_509160343091683_6500646984112829607_n_700x.progressive.jpg'

const data = [
    img_1,
    img_2,
    img_3,
    img_4
]

const Item = () => {
    return data.map((datum, i) => <img key={i} src={datum} alt="Images" className='explore_image mr-3 snap-always snap-center' /> )
}

export default function Explore() {
  return (
    <>
        <section>
            <div className='tracking-[.25rem] text-center mt-5'>
                <div className='text-sm opacity-80'>GET INSPIRED</div>
                <div className='my-5 text-2xl text-gray-500'>SHOP THE LOOK</div>
            </div>
            <div className='flex overflow-x-scroll py-8 snap-x snap-mandatory px-8 mb-5'>
                <Item />
            </div>
            <div className=' flex justify-center px-8'>
                <button className='bg-red-300 px-8 py-5 text-white tracking-[.25rem] text-sm w-full'>VIEW PRODUCTS</button>
            </div>
        </section>
    </>
  )
}
