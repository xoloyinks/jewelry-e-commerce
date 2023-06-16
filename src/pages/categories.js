import React from 'react'
import cat_1 from './images/pexels-cottonbro-studio-94312876.jpg'
import cat_2 from './images/pexels-julia-kuzenkov-11318560.jpg'
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

window.addEventListener('scroll', reveal);

function reveal(){
    const cat_one = document.querySelector('.cat_one');
    const cat_two = document.querySelector('.cat_two');
    const cat_three = document.querySelector('.cat_three');

    const cat_one_position = cat_one.getBoundingClientRect().top;
    const cat_two_position = cat_two.getBoundingClientRect().top;
    const cat_three_position = cat_three.getBoundingClientRect().top;

    if(cat_one_position < 600){
        cat_one.style.transform = "translateX(0px)";
        cat_one.style.transition = `1s`;
    }
    if(cat_two_position < 600){
        cat_two.style.transform = "translateX(0px)";
        cat_two.style.transition = `1s`;
    }
    if(cat_three_position < 1200){
        cat_three.style.transform = "translateY(0px)";
        cat_three.style.transition = `1s`;
    }


}

const Category_item = () => {
    return data.map((datum, i) => <Item key={i} Image={datum.Image} title={datum.title} id={datum.id} subtitle={datum.subtitle} button_caption={datum.button_caption} />)
}

const Item = ({Image, title, subtitle, button_caption, id, key}) => {
    return(
        <>
            <section id={id}  className= {`${id} mx-auto max-[420px]:h-[60vh] h-[55vh] w-[91%] py-5 my-8 relative lg:w-[30%] lg:h-[80vh]`}  style={{ backgroundImage: `url(${Image})`}}>
                <div id={id} className=' w-full absolute px-3 tracking-[.25rem] bottom-0 py-5 '>
                    <div className='py-2 max-[420px]:text-[12px] text-sm font-bold lg:font-light lg:text-xs'>{subtitle.toUpperCase()}</div>
                    <div className='py-2 max-[420px]:text-xl text-3xl lg:text-2xl'>{title.toUpperCase()}</div>
                    <button className='px-8 py-5 max-[420px]:py-3 mt-2 max-[420px]:text-[12px] text-sm tracking-widest text-white bg-red-300 lg:text-xs lg:px-5 lg:py-3'>{button_caption.toUpperCase()}</button>
                </div>
            </section>
        </>
    )
}



export default function Categories() {
  return (
    <>
        <h1 className='py-2 mt-10 text-[14px] tracking-widest lg:text-xl text-center  font-bold'>
            CATEGORIES
        </h1>
        <section className='overflow-hidden px-3 h-[fit-content] lg:flex'>
            <Category_item />
        </section>
    </>
  )
}
