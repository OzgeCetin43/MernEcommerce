import { Layout } from "antd";

import BannerCarousel from "../components/BannerCarousel";
import CategoryList from "../components/CategoryList";

const { Content } = Layout;

const Home = () => {
  return (
    <Content className="flex flex-col justify-center gap-2 p-2">
      <BannerCarousel />
      <CategoryList />
    </Content>
  );
};

export default Home;
