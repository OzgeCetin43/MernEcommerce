import { Row, Col, Image } from "antd";

import banner1 from "../assets/images/banner-1.jpeg";
import banner2 from "../assets/images/banner-2.jpeg";
import banner3 from "../assets/images/banner-3.jpeg";

const bannerList = [banner1, banner2, banner3];

const SmallBannerList = () => {
  return (
    <Row gutter={[8, 8]}>
      {bannerList.map((item, index) => (
        <Col key={index} xs={24} lg={8}>
          <Image
            src={item}
            className="!h-[300px] object-cover border-2 border-slate-950 rounded-md"
            alt="small banner"
          />
        </Col>
      ))}
    </Row>
  );
};

export default SmallBannerList;
