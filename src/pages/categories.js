import React from 'react'
import cat_1 from './images/pexels-cottonbro-studio-94312876.jpg'
import cat_2 from './images/pexels-jr-tavares-169524141.jpg'
import cat_3 from './images/pexels-uzziiii-33853715.jpg'
const data = [
    {
        id: 'cat_one',
        Image: cat_1,
        title: 'Wedding & Engagement',
        subtitle: 'Personal service',
        button_caption: 'shop rings'
    },
    {
        id: 'cat_three',
        Image: cat_3,
        title: 'Les Autres',
        subtitle: 'golden eye',
        button_caption: 'shop rings'
    },
    {
        id: 'cat_two',
        Image: cat_2,
        title: '100% Recycled diamond rings',
        subtitle: 'made for you',
        button_caption: 'shop rings'
    }
];



const Category_item = () => {
    return data.map((datum, i) => <Item key={i} Image={datum.Image} title={datum.title} id={datum.id} subtitle={datum.subtitle} button_caption={datum.button_caption} />)
}

const Item = ({Image, title, subtitle, button_caption, id}) => {
    return(
        <>
            <section id={id}  className='mx-auto h-[55vh] w-[91%] py-5 my-8 relative  lg:w-[32%] lg:h-[85vh]'  style={{ backgroundImage: `url(${Image})`}}>
                <div id={id} className=' w-full absolute px-3 tracking-[.25rem] bottom-0 py-5 '>
                    <div className='text-sm  font-bold py-2 lg:font-light lg:text-xs'>{subtitle.toUpperCase()}</div>
                    <div className='py-2 text-3xl lg:text-2xl'>{title.toUpperCase()}</div>
                    <button className='px-8 py-5 bg-red-300 mt-2 tracking-widest text-sm text-white lg:text-xs lg:px-5 lg:py-3'>{button_caption.toUpperCase()}</button>
                </div>
            </section>
        </>
    )
}



export default function Categories() {
  return (
    <>
        <section className='px-3 h-[fit-content] lg:flex'>
            <Category_item />
        </section>
    </>
  )
}
