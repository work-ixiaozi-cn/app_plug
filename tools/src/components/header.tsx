import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex gap-x-5px mx-5px">
      <Input placeholder="large size" prefix={<SearchOutlined />} />
    </div>
  );
};

export default Header;
