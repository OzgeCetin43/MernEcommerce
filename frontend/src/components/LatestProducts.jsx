import { Layout, Typography } from "antd";
import ProductSlider from "./ProductSlider";

const { Content } = Layout;
const { Title } = Typography;

const LatestProducts = () => {
  return (
    <Content className="flex flex-col gap-2">
      <Title level={5} className="text-xs">
        Latest Products
      </Title>
      <ProductSlider slidesPerView={7} />
    </Content>
  );
};

export default LatestProducts;
