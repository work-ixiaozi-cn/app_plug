import { LoadingOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { FC } from "react";


const Sender: FC = () => {
  return (
    <div className="flex m-5px my-15px">
      <div className="self-center w-30px flex place-content-center">
        <LoadingOutlined />
      </div>
      <div className="flex-auto bg-gray-300 rounded-5px p-8px">
        <div>xxxxxxxxx</div>
        <div>xxxxxxxxx</div>
        <div>xxxxxxxxx</div>
      </div>
      <div className="w-60px h-50px flex">
        <div className="self-center bg-gray-300 w-10px h-10px transform rotate-45 -translate-x-5px" />
        <Avatar
          className="w-50px h-50px"
          src="https://lanye.co/holder/80x80/00aff0/fff/"
        />
      </div>
    </div>
  );
}

export default Sender;