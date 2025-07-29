"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const SwiperCards = ({
  items,
}: {
  items: { src: string; card: ReactNode }[];
  paginationImages?: boolean;
  className={`w-full ${className || "h-96"}`}
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map(({ card }, i) => (
            <div>{card}</div>
          ))}
        </Swiper>
        {Pagination &&
          items.map(({ src }, i) => (
            <div className="w-40 h-40 relative" key={i}>
              <Image alt="" src={src} fill className="object-cover" />
            </div>
          ))}
      </div>
    </>
  );
};

export default SwiperCards;
