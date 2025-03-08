import { Carousel, Image } from "antd";

import banner1 from "../assets/images/banner-1.jpeg";
import banner2 from "../assets/images/banner-2.jpeg";
import banner3 from "../assets/images/banner-3.jpeg";
import banner4 from "../assets/images/banner-4.jpg";
import banner5 from "../assets/images/banner-5.jpg";

const bannerList = [banner1, banner2, banner3, banner4, banner5];

const BannerCarousel = () => {
  return (
    <Carousel autoplay arrows className="p-8 bg-slate-800 rounded-md">
      {bannerList.map((item, index) => (
        <Image
          key={index}
          src={item}
          alt="banner"
          preview={false}
          className="object-cover rounded-md border-2 border-slate-50"
        />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
