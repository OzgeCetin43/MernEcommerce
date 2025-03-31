import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import ProductItem from "./ProductItem";

const ProductSlider = (props) => {
  return (
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
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/1.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/5.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/9.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/2.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/6.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/10.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/3.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/7.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem
          product={{
            image:
              "https://themes.pixelstrap.com/fastkart/assets/images/fashion/product/11.jpg",
            discount: "10%",
            brand: "Soylent Green",
            title: "Tuffets Whole Wheat Bread",
            rate: 4,
            oldPrice: "$68.00",
            newPrice: "$51.75",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
