import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const DiscountBanner = () => {
  return (
    <Content className="flex flex-col items-center justify-center bg-[url('https://themes.pixelstrap.com/fastkart/assets/images/fashion/banner/4.jpg')] h-24 rounded-md gap-2">
      <Text className="text-white font-bold">
        Get $3 Cashback! Min Order of $30
      </Text>
      <Text className="text-white border border-dashed border-white p-2 rounded-md text-xs">
        Use Code: FASHION1928
      </Text>
    </Content>
  );
};

export default DiscountBanner;
