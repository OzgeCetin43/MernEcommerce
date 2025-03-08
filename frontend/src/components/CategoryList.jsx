import { Row, Col, Image, Typography, Layout } from "antd";

import category1 from "../assets/images/category-1.png";
import category2 from "../assets/images/category-2.png";
import category3 from "../assets/images/category-3.png";
import category4 from "../assets/images/category-4.png";
import category5 from "../assets/images/category-5.png";
import category6 from "../assets/images/category-6.png";
import category7 from "../assets/images/category-7.png";
import category8 from "../assets/images/category-8.png";

const { Text } = Typography;
const { Content } = Layout;

const categoryList = [
  {
    id: 1,
    name: "Fashion",
    image: category1,
  },
  {
    id: 2,
    name: "Electronics",
    image: category2,
  },
  {
    id: 3,
    name: "Bags",
    image: category3,
  },
  {
    id: 4,
    name: "Footwear",
    image: category4,
  },
  {
    id: 5,
    name: "Groceries",
    image: category5,
  },
  {
    id: 6,
    name: "Beauty",
    image: category6,
  },
  {
    id: 7,
    name: "Wellness",
    image: category7,
  },
  {
    id: 8,
    name: "Jewellery",
    image: category8,
  },
];

const CategoryList = () => {
  return (
    <Row gutter={[8, 8]} className="m-4">
      {categoryList.map((item) => (
        <Col key={item.id} xs={8} lg={3}>
          <Content className="flex-none flex flex-col items-center bg-[#fafafa] hover:bg-primary p-4 rounded-md border-2 border-slate-950 gap-2 transition-all duration-500 ease-in-out cursor-pointer">
            <Image src={item.image} preview={false} className="!w-[60px]" />
            <Text className="font-bold text-xs">{item.name}</Text>
          </Content>
        </Col>
      ))}
    </Row>
  );
};

export default CategoryList;
