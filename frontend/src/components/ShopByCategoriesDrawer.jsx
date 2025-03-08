import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button, Typography, Menu } from "antd";
import { IoClose } from "react-icons/io5";
import { GiExpander } from "react-icons/gi";

const { Text } = Typography;

const items = [
  {
    key: "fashion",
    label: "Fashion",
    children: [
      {
        key: "apparel",
        label: "Apparel",
        children: [
          {
            key: "smart-tablet",
            label: <Link to="/">Smart Tablet</Link>,
          },
          {
            key: "crepe-tshirt",
            label: <Link to="/">Crepe T-Shirt</Link>,
          },
          {
            key: "leather-watch",
            label: <Link to="/">Leather Watch</Link>,
          },
          {
            key: "rolling-diamond",
            label: <Link to="/">Rolling Diamond</Link>,
          },
        ],
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const ShopByCategoriesDrawer = ({ isOpen, setIsOpen }) => {
  const [openKeyList, setOpenKeyList] = useState();
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => openKeyList?.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setOpenKeyList(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setOpenKeyList(openKeys);
    }
  };

  return (
    <Drawer
      title={<Text className="text-primary text-md">Categories</Text>}
      placement="left"
      onClose={() => setIsOpen(false)}
      open={isOpen}
      className="!bg-slate-800 text-primary text-xs"
      closable={false}
      extra={
        <Button
          className="!bg-slate-950 rounded-md border-none flex items-center justify-center !w-6 !h-6"
          icon={<IoClose className="!text-primary text-md" />}
          onClick={() => setIsOpen(false)}
        />
      }
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[]}
        openKeys={openKeyList}
        onOpenChange={onOpenChange}
        items={items}
        className="bg-slate-500 rounded-md !m-0"
        expandIcon={<GiExpander />}
      />
    </Drawer>
  );
};

export default ShopByCategoriesDrawer;
