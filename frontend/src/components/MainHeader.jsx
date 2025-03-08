import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Layout,
  Typography,
  Badge,
  Avatar,
  Tooltip,
  Button,
  Menu,
} from "antd";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";

import SearchBox from "./SearchBox";
import ShopByCategoriesDrawer from "./ShopByCategoriesDrawer";

const { Header, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  {
    key: "home",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Home
      </Link>
    ),
  },
  {
    key: "fashion",
    label: "Fashion",
    children: [
      {
        key: "men",
        label: "Men",
        children: [
          {
            key: "men-tshirt",
            label: (
              <Link to="/" className="font-bold hover:!text-white">
                T-Shirt
              </Link>
            ),
          },
          {
            key: "men-jeans",
            label: (
              <Link to="/" className="font-bold hover:!text-white">
                Jeans
              </Link>
            ),
          },
          {
            key: "men-footwear",
            label: (
              <Link to="/" className="font-bold hover:!text-white">
                Footwear
              </Link>
            ),
          },
          {
            key: "men-watch",
            label: (
              <Link to="/" className="font-bold hover:!text-white">
                Watch
              </Link>
            ),
          },
          {
            key: "men-pents",
            label: (
              <Link to="/" className="font-bold hover:!text-white">
                Pents
              </Link>
            ),
          },
        ],
      },
      {
        key: "women",
        label: (
          <Link to="/" className="font-bold hover:!text-white">
            Women
          </Link>
        ),
      },
      {
        key: "kids",
        label: (
          <Link to="/" className="font-bold hover:!text-white">
            Kids
          </Link>
        ),
      },
      {
        key: "girls",
        label: (
          <Link to="/" className="font-bold hover:!text-white">
            Girls
          </Link>
        ),
      },
      {
        key: "boys",
        label: (
          <Link to="/" className="font-bold hover:!text-white">
            Boys
          </Link>
        ),
      },
    ],
  },
  {
    key: "electronics",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Electronics
      </Link>
    ),
  },
  {
    key: "bags",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Bags
      </Link>
    ),
  },
  {
    key: "footwear",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Footwear
      </Link>
    ),
  },
  {
    key: "groceries",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Groceries
      </Link>
    ),
  },
  {
    key: "beauty",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Beauty
      </Link>
    ),
  },
  {
    key: "wellness",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Wellness
      </Link>
    ),
  },
  {
    key: "jewellery",
    label: (
      <Link to="/" className="font-bold hover:!text-white">
        Jewellery
      </Link>
    ),
  },
];

const MainHeader = () => {
  const [isShopByCategoriesDrawerOpen, setIsShopByCategoriesDrawerOpen] =
    useState(false);

  return (
    <Content>
      <Content className="flex flex-col md:flex-row justify-between items-center gap-2 p-3 bg-slate-700">
        <Text className="text-primary text-xs font-bold">
          Get up 50% off new season styles, limited time only!
        </Text>
        <Divider className="m-0 bg-slate-500 md:hidden" />
        <Content className="flex-none flex gap-1">
          <Link
            to="/"
            className="text-xs text-white hover:text-primary transition-all ease-in-out"
          >
            Help Center
          </Link>
          <Divider type="vertical" className="bg-primary" />
          <Link
            to="/"
            className="text-xs text-white hover:text-primary transition-all ease-in-out"
          >
            Order Tracking
          </Link>
        </Content>
      </Content>
      <Header className="p-2 h-auto md:h-14 leading-14 px-4 bg-slate-800 flex flex-col md:flex-row items-center justify-between gap-2">
        <Text className="text-white text-lg">
          Big <span className="text-primary">Mega</span> Shop
        </Text>
        <SearchBox />
        <Content className="flex-none flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <Content className="flex-none flex items-center justify-center mr-0 md:mr-10">
            <Link
              to="/login"
              className="text-white text-xs hover:text-primary transition-all ease-in-out"
            >
              Login
            </Link>
            <Divider type="vertical" className="bg-primary" />
            <Link
              to="/register"
              className="text-white text-xs hover:text-primary transition-all ease-in-out"
            >
              Register
            </Link>
          </Content>
          <Divider className="m-0 bg-slate-500 md:hidden" />
          <Content className="flex-none flex justify-center items-center gap-6 mt-2 md:mt-0">
            <Tooltip title="Compare" placement="bottom" color="#fec934">
              <Badge count={1} size="small" color="#1D293D">
                <Avatar
                  shape="square"
                  size="small"
                  className="bg-slate-600"
                  icon={<IoMdGitCompare />}
                />
              </Badge>
            </Tooltip>
            <Tooltip title="Wishlist" placement="bottom" color="#fec934">
              <Badge count={1} size="small" color="#1D293D">
                <Avatar
                  shape="square"
                  size="small"
                  className="bg-slate-600"
                  icon={<FaRegHeart />}
                />
              </Badge>
            </Tooltip>
            <Tooltip title="Cart" placement="bottom" color="#fec934">
              <Badge count={1} size="small" color="#1D293D">
                <Avatar
                  shape="square"
                  size="small"
                  className="bg-slate-600"
                  icon={<FaShoppingCart />}
                />
              </Badge>
            </Tooltip>
          </Content>
        </Content>
      </Header>
      <Content className="flex-none flex flex-col md:flex-row items-center justify-between p-2 gap-2 bg-slate-700">
        <Button
          className="border-none shadow-none w-full md:w-1/5 bg-slate-800 rounded-md !text-primary hover:!bg-slate-950 transition-all ease-in-out duration-500 flex items-center justify-between"
          onClick={() => setIsShopByCategoriesDrawerOpen(true)}
        >
          <Content className="flex-none flex items-center gap-2">
            <RiMenu2Fill className="text-primary" />
            <Text className="font-bold text-primary text-sm uppercase">
              Shop By Categories
            </Text>
          </Content>
          <BiSolidDownArrow className="text-xs text-primary" />
        </Button>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={menuItems}
          className="bg-transparent w-full md:w-1/2 text-xs md:text-sm"
        />
        <Divider className="!m-0 md:hidden bg-slate-500" />
        <Text className="flex items-center gap-1 text-xs text-primary font-bold">
          <IoRocketOutline className="text-lg" /> Free international delivery
        </Text>
      </Content>
      <ShopByCategoriesDrawer
        isOpen={isShopByCategoriesDrawerOpen}
        setIsOpen={setIsShopByCategoriesDrawerOpen}
      />
    </Content>
  );
};

export default MainHeader;
