import { Layout, Input, Button } from "antd";
import { FaSearchengin } from "react-icons/fa6";

const { Content } = Layout;

const SearchBox = () => {
  return (
    <Content className="flex-none flex items-center w-full md:w-1/3 h-8 bg-slate-50 rounded-md">
      <Input
        className="w-full !bg-transparent rounded-none border-none !shadow-none text-xs"
        placeholder="Search"
      />
      <Button
        icon={<FaSearchengin />}
        className="h-8 bg-slate-950 rounded-none border-none text-primary rounded-r-md hover:!bg-primary hover:!text-slate-800 transition-all ease-in-out"
      ></Button>
    </Content>
  );
};

export default SearchBox;
