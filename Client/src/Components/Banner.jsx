import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay,  Navigation } from 'swiper/modules';

const Banner = () => {
  const navigate = useNavigate();

  const handleAddQuery = () => {
    navigate("/add-queries"); 
  };

  const slideData = [
    {
      image: "https://i.ibb.co.com/JnbfG9c/queryslider1.jpg",
      title: "Welcome to the Book Query Hub!",
      description:
        "Have questions or concerns about books? Add your queries now!",
    },
    {
      image: "https://i.ibb.co.com/WFcknFq/queryslider2.jpg",
      title: "Welcome to the Book Query Hub!",
      description:
        "Have questions or concerns about books? Add your queries now!",
    },
    {
      image: "https://i.ibb.co.com/wNN37hK/queryslider3.jpg",
      title: "Welcome to the Book Query Hub!",
      description:
        "Have questions or concerns about books? Add your queries now!",
    },
    {
      image: "https://i.ibb.co.com/ft7RLdP/queryslider.webp",
      title: "Welcome to the Book Query Hub!",
      description:
        "Have questions or concerns about books? Add your queries now!",
    },
  ];
  return (
   
    <div className="h-full">
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
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[450px] object-cover brightness-50 bg-blend-overlay" 
              />
              <div className=" absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-white md:p-6 rounded-lg max-w-lg text-center">
                <h2 className="text-3xl font-bold mb-4 ">{slide.title}</h2>
                <p className="text-lg font-bold mb-6 text-white ">{slide.description}</p>
                <button  onClick={handleAddQuery} className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-size-200 hover:bg-right-bottom transition-all duration-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
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

export default Banner;