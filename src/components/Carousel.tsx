import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { ImageUrl } from "@/enum/enums"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselItemData = [
  {
    legend: "Indulge in culinary exploration with our gourmet companion – your pathway to gastronomic delight!",
    image: ImageUrl.Food
  },
  {
    legend: "Venture into legal realms with our bespoke navigator – your passport to adventure!",
    image: ImageUrl.Mountain
  },
  {
    legend: "Embark on a sports law journey with our illustrious guide – your key to sporting thrills!",
    image: ImageUrl.Sport
  },
]

export function CardCarousel() {
  return (
<Carousel infiniteLoop={true} autoPlay={true} className="w-full max-w-lg md:h-[46vh]">
    {CarouselItemData.map((item, index) => {
      return (
        <div key={index} className="h-full flex">
          <img className="h-[35vh] md:h-[46vh] mt-4 w-auto rounded-lg object-cover" src={item.image} />
          <p className="legend">{item.legend}</p>
        </div>
      )
    })}
  </Carousel>

  )
}
