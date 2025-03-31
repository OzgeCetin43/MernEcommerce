import { Layout, Typography } from "antd";
import ProductSlider from "./ProductSlider";

const { Content } = Layout;
const { Title } = Typography;

const FeaturedProducts = () => {
  return (
    <Content className="flex flex-col gap-2">
      <Title level={5} className="text-xs">
        Featured Products
      </Title>
      <ProductSlider slidesPerView={7} />
    </Content>
  );
};

export default FeaturedProducts;
