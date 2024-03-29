import React, { useEffect } from 'react';
import { ImageUrl } from "@/enum/enums";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselItemData = [
  {
    legend: "Transform your ideas into captivating visuals with our LLM model.",
    image: ImageUrl.Food
  },
  {
    legend: "Elevate your projects with stunning imagery generated effortlessly.",
    image: ImageUrl.Mountain
  },
  {
    legend: "Instantly create stunning images that bring your ideas to life.",
    image: ImageUrl.Sport
  },
];

export function CardCarousel() {
  useEffect(() => {
    CarouselItemData.forEach(item => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = item.image;
      document.head.appendChild(preloadLink);
    });
  }, []);

  return (
    <Carousel infiniteLoop={true} autoPlay={true} className="w-full max-w-lg md:h-[46vh] lg:h-[37vh]">
      {CarouselItemData.map((item, index) => (
        <div key={index} className="h-full flex overflow-hidden">
          <img className="h-[35vh] md:h-[46vh] lg:h-[37vh] mt-4 w-auto rounded-lg object-cover" src={item.image} />
          <p className="legend">{item.legend}</p>
        </div>
      ))}
    </Carousel>
  );
}
