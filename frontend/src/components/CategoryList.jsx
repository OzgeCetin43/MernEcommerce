import { Row, Col, Image, Typography, Layout } from "antd";

const { Text } = Typography;
const { Content } = Layout;

const categoryList = [
  {
    id: 1,
    name: "Fashion",
    image: "https://cdn-icons-png.flaticon.com/128/3050/3050239.png",
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/128/2278/2278984.png",
  },
  {
    id: 3,
    name: "Bags",
    image: "https://cdn-icons-png.flaticon.com/128/3275/3275938.png",
  },
  {
    id: 4,
    name: "Footwear",
    image: "https://cdn-icons-png.flaticon.com/128/1334/1334203.png",
  },
  {
    id: 5,
    name: "Groceries",
    image: "https://cdn-icons-png.flaticon.com/128/3514/3514242.png",
  },
  {
    id: 6,
    name: "Beauty",
    image: "https://cdn-icons-png.flaticon.com/128/1940/1940993.png",
  },
  {
    id: 7,
    name: "Wellness",
    image: "https://cdn-icons-png.flaticon.com/128/4525/4525525.png",
  },
  {
    id: 8,
    name: "Jewellery",
    image: "https://cdn-icons-png.flaticon.com/128/4259/4259798.png",
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
