import { Link } from "react-router-dom";
import { Layout, Image, Typography, Rate, Button, Tooltip } from "antd";
import { FaRegHeart, FaExpandArrowsAlt } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";

const { Content } = Layout;
const { Text } = Typography;

const ProductItem = (props) => {
  return (
    <Content className="flex flex-col bg-gray-200 rounded-md gap-2 p-4 relative group">
      <Image
        src={props.product.image}
        alt="product"
        preview={false}
        className="rounded-md max-h-[150px]"
      />
      <Text className="absolute top-[10px] left-[10px] bg-primary p-2 rounded-md font-bold">
        {props.product.discount}
      </Text>
      <Content className="absolute flex-none flex-col gap-1 bg-slate-50 p-2 top-[10px] right-[10px] rounded-md hidden group-hover:flex">
        <Tooltip title="Wishlist" placement="bottom" color="#fec934">
          <Button
            icon={<FaRegHeart />}
            className="bg-transparent border-none shadow-none hover:!text-primary"
          />
        </Tooltip>
        <Tooltip title="Compare" placement="bottom" color="#fec934">
          <Button
            icon={<IoGitCompare />}
            className="bg-transparent border-none shadow-none hover:!text-primary"
          />
        </Tooltip>
        <Tooltip title="Detail" placement="bottom" color="#fec934">
          <Button
            icon={<FaExpandArrowsAlt />}
            className="bg-transparent border-none shadow-none hover:!text-primary"
          />
        </Tooltip>
      </Content>
      <Text className="font-bold text-xs">{props.product.brand}</Text>
      <Link to="/" className=" font-bold text-xs hover:text-primary">
        {props.product.title}
      </Link>
      <Rate disabled defaultValue={props.product.rate} className="text-xs" />
      <Content className="flex items-center gap-2">
        <Text className="line-through text-slate-600">
          {props.product.oldPrice}
        </Text>
        <Text className="text-[18px] text-rose-600 font-bold">
          {props.product.newPrice}
        </Text>
      </Content>
    </Content>
  );
};

export default ProductItem;
