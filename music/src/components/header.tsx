import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Menu, MenuProps, Popover } from "antd";
import { FC } from "react";

const create = ({ key }: { key: string }) => {
  switch (key) {
    case 'openai':
      window.electron.db.create('abc', 'def').then(res => {
        console.log({res});
      })
      break;
  
    default:
      break;
  }
  
}
const items: MenuProps['items'] = [
  {
    icon: <PlusOutlined />,
    key: 'openai',
    label: 'OpenAI',
  },
];

const PopMenu:FC = () => {
  return (
    <Menu
      onClick={create}
      style={{ width: 200 }}
      defaultSelectedKeys={[]}
      mode="inline"
      items={items}
    />
  );
}

const Header: FC = () => {
  return (
    <div className="flex gap-x-5px mx-5px">
      <Input placeholder="large size" prefix={<SearchOutlined />} />
      <Popover placement="rightTop" content={<PopMenu />}>
        <Button className="px-10px">
            <PlusOutlined />
        </Button>
      </Popover>
    </div>
  );
};

export default Header;