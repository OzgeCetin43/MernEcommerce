import { Link } from "react-router-dom";
import { Layout, Typography, Image } from "antd";
import { BsCalendar2Date } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";

const { Content } = Layout;
const { Text } = Typography;

const BlogItem = (props) => {
  return (
    <Content className="p-2 flex flex-col gap-2 bg-slate-100 rounded-md">
      <Image
        src={props.blog.image}
        alt="blog"
        preview={false}
        className="!h-[150px] rounded-md"
      />
      <Text className="font-bold">{props.blog.title}</Text>
      <Text className="text-[10px]">
        by <Text className="font-bold text-[10px]">{props.blog.author}</Text>
      </Text>
      <Text className="text-[10px] flex items-center gap-2">
        <BsCalendar2Date /> {props.blog.date}
      </Text>
      <Link
        to="/"
        className="flex items-center justify-center bg-primary !text-slate-950 h-6 text-xs font-bold rounded-md gap-2"
      >
        Read More <MdPlayArrow />
      </Link>
    </Content>
  );
};

export default BlogItem;
