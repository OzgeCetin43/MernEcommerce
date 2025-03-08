import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default MainLayout;
