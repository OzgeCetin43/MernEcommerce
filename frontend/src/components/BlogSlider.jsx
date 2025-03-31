import { Layout, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import BlogItem from "./BlogItem";

const { Content } = Layout;
const { Title } = Typography;

const BlogSlider = (props) => {
  return (
    <Content className="flex flex-col gap-2">
      <Title level={5} className="md:text-center">
        From The Blog
      </Title>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="w-full !h-auto"
        breakpoints={{
          768: {
            slidesPerView: props.slidesPerView,
          },
        }}
      >
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0002_tyler-nix-518924-unsplash.jpg",
              title: "Crowns For Queens",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0003_tyler-nix-546553-unsplash.jpg",
              title: "10 Colors You Need",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0004_tyler-nix-534268-unsplash.jpg",
              title: "Amazing News",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0006_beautiful-close-up-color-1078058.jpg",
              title: "Perfect Color To Skin Match",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0007_tyler-nix-594387-unsplash.jpg",
              title: "Leather Trends",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem
            blog={{
              image:
                "https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/2018/03/Untitled-1_0008_tyler-nix-604226-unsplash.jpg",
              title: "Summer Hits",
              author: "sufflehound",
              date: "July 12, 2024",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Content>
  );
};

export default BlogSlider;
