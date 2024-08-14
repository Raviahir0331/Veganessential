import React from 'react'
import slid1 from './Images/slid1.webp';
import slid2 from './Images/slid2.webp';
import slid3 from './Images/slid3.webp';
import slid4 from './Images/slid4.webp';
import Slider from "react-slick";

const Carousel = () => {
    let slider = {
        dots:false,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };

    const ImageList =[
        {
            id :1,
            name:"ravi",
            img:slid1
        },
        {
            id:2,
            img:slid2
        },
        {
            id:3,
            img:slid3
        },
        {
            id:4,
            img:slid4
        }

    ]

  return (
    <>
            <Slider {...slider}>{ImageList.map((data)=>(

            <div className='  py-2'>
                
                     <img src={data.img}/>
                
            </div>

            ))}</Slider>
    </>
  )
}

export default Carousel;

