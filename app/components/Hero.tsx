import React from "react";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import SwiperCards from "./SwiperCards";

const Hero = () => {
  return (
    <div>
      <MaxWidthWrapper children={undefined}>
        <SwiperCards
          items={[{ card: <div className="text-3xl font-bold">Hero</div> }]}
        >
          <div className=""></div>
        </SwiperCards>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
