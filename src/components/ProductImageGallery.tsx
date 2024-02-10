"use client"

import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { useState } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"

const ProductImageGallery = ({ images }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "red",
            "--swiper-pagination-color": "red",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image: any) => (
          <SwiperSlide key={image._key}>
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper as any}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-2"
      >
        {images.map((image: any) => (
          <SwiperSlide key={image._key}>
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={100}
              height={100}
              className="h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductImageGallery
