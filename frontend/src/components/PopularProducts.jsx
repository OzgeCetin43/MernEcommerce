import { Layout, Typography, Menu } from "antd";
import { useState } from "react";
import ProductSlider from "./ProductSlider";

const { Content } = Layout;
const { Title, Text } = Typography;

const menuItems = [
  {
    label: "Fashion",
    key: "fashion",
  },
  {
    label: "Electronics",
    key: "electronics",
  },
  {
    label: "Bags",
    key: "bags",
  },
  {
    label: "Footwear",
    key: "footwear",
  },
  {
    label: "Groceries",
    key: "groceries",
  },
  {
    label: "Beauty",
    key: "beauty",
  },
  {
    label: "Wellness",
    key: "wellness",
  },
  {
    label: "Jewellery",
    key: "jewellery",
  },
];

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState("fashion");

  const changeActiveTabHandler = (e) => {
    setActiveTab(e.key);
  };

  return (
    <Content className="flex flex-col gap-2">
      <Content className="flex items-center justify-between">
        <Content className="flex flex-col w-1/2 p-2">
          <Title level={5} className="text-xs">
            Popular Products
          </Title>
          <Text className="text-xs">
            Do not miss the current offers until the end of April.
          </Text>
        </Content>
        <Content className="flex flex-col w-1/2">
          <Menu
            selectedKeys={[activeTab]}
            mode="horizontal"
            onClick={changeActiveTabHandler}
            items={menuItems}
          />
        </Content>
      </Content>
      <ProductSlider slidesPerView={6} />
    </Content>
  );
};

export default PopularProducts;
