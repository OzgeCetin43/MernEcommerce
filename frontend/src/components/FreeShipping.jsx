import { Divider, Layout, Typography } from "antd";
import { FaShippingFast } from "react-icons/fa";

const { Content } = Layout;
const { Text } = Typography;

const FreeShipping = () => {
  return (
    <Content className="border-2 border-slate-800 bg-primary p-4 rounded-md flex flex-col md:flex-row items-center justify-between text-center gap-2">
      <Text className="flex items-center gap-1 font-bold text-xs">
        <FaShippingFast className="text-4xl" />
        Free Shiping
      </Text>
      <Divider type="vertical" className="hidden md:flex bg-slate-600" />
      <Divider type="horizontal" className="!m-0 md:hidden bg-slate-600" />
      <Text className="font-bold text-lg">
        Free Delivery Now On Your First Order and over $200
      </Text>
      <Divider type="vertical" className="hidden md:flex bg-slate-600" />
      <Divider type="horizontal" className="!m-0 md:hidden bg-slate-600" />
      <Text className="font-bold text-xl p-2">- ONLY $200</Text>
    </Content>
  );
};

export default FreeShipping;
