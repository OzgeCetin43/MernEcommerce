import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const BannerCarousel = () => {
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
          src="https://img.freepik.com/free-psd/black-friday-sale-social-media-post-design-template_47987-24463.jpg?t=st=1743416326~exp=1743419926~hmac=620b3f22f249cf95c2e859d87c6a2604803c8b63238387c9dfb89820049830b4&w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/free-psd/black-friday-discount-sale-social-media-post-design-template_47987-24460.jpg?t=st=1743416315~exp=1743419915~hmac=a7024dcb46d273afe83b4c6ddbbf784579d67486a4f52e6b69b97fee5fe7869e&w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/free-psd/black-friday-product-sale-social-media-post-design-template_47987-24557.jpg?t=st=1743416106~exp=1743419706~hmac=1efa3cd641c6044fc891947bfe6074cf17aff9848626cda7021b6618b53c6c11&w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/free-psd/black-friday-big-sale-social-media-post-template_47987-24801.jpg?t=st=1743416350~exp=1743419950~hmac=915ae5fd23d74c8a8e9c2f88f93e597982f30ec3b12e989f1ace73dc1a5d4221&w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/premium-psd/black-friday-mega-sale-social-media-post-design-template_47987-24473.jpg?w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/premium-psd/black-friday-super-sale-social-media-post-template_47987-24356.jpg?w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://img.freepik.com/free-psd/black-friday-sale-social-media-post-design-template_47987-17505.jpg?t=st=1743416411~exp=1743420011~hmac=2288fe86623449f9605298d5c40c55c206a70881cc51b842f9d7dc9ac164fc80&w=826"
          alt="banner"
          preview={false}
          width="100%"
          className="rounded-md"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;
