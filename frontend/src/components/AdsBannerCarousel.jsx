import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const AdsBannerCarousel = () => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="w-full !h-auto md:max-w-[1300px]"
    >
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/free-psd/black-friday-sale-social-media-instagram-story-design-template_47987-24566.jpg?t=st=1743419432~exp=1743423032~hmac=d88324cbaf5b42266b00c062ab9afc7affafc0c756a4f0bab3052cdf1109b1ae&w=740"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/premium-psd/black-friday-mega-sale-social-media-instagram-story-design-template_47987-25061.jpg?w=740"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AdsBannerCarousel;
