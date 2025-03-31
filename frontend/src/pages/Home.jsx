import { Layout } from "antd";

import BannerCarousel from "../components/BannerCarousel";
import CategoryList from "../components/CategoryList";
import FreeShipping from "../components/FreeShipping";
import PopularProducts from "../components/PopularProducts";
import AdsBannerCarousel from "../components/AdsBannerCarousel";

const { Content } = Layout;

const Home = () => {
  return (
    <Content className="flex flex-col justify-center gap-2 p-2">
      <BannerCarousel />
      <CategoryList />
      <FreeShipping />
      <PopularProducts />
      <AdsBannerCarousel />
    </Content>
  );
};

export default Home;
