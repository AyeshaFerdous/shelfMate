
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay,  Navigation } from 'swiper/modules';

const Slider = () => {
  const slideData = [
    {
      image: "https://i.ibb.co.com/PDqGD5d/DALL-E-2024-12-22-02-16-35-A-stack-of-colorful-books-arranged-neatly-on-a-wooden-shelf-The-books-hav.webp",
      title: "The Science of Happiness",
      description:
        "A journey beyond eras.",
    },
    {
      image: "https://i.ibb.co.com/VW7MFQG/slider1.jpg",
      title: "Beneath Starlit Skies",
      description:
        "Hope lights the way.",
    },
    {
      image: "https://i.ibb.co.com/gWz80Tx/slider5.jpg",
      title: "Hidden Histories",
      description:
        "Darkness hides truths.",
    },
    {
      image: "https://i.ibb.co.com/GFpSFFG/slider2.jpg",
      title: "Awaken Your Inner Potential",
      description:
        "Discover your true self.",
    },
  ];

 
  return (
    <div className="h-full relative">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full lg:h-[90vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[600px] object-cover brightness-75 bg-blend-overlay" 
              />
              <div className="absolute bottom-40 left-6 text-white p-6 rounded-lg max-w-lg">
                <h2 className="text-2xl font-bold mb-4 ">{slide.title}</h2>
                <p className="text-5xl font-bold mb-4 text-white ">{slide.description}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg">
                  Add Query
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      
      </Swiper>
    </div>
  );
};

export default Slider;
