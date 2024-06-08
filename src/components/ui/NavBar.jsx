import React from "react";
import {
  HomeTwoTone,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
// import { HomeIcon } from "@heroicons/react/20/solid";
const items = [
  {
    key: "sub1",
    label: "Home",
    type: "group",
    icon: <HomeTwoTone />,
  },
  {
    key: "sub2",
    label: "Catalog",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Item 1",
        type: "group",
        children: [
          {
            key: "1",
            label: "Option 1",
          },
          {
            key: "2",
            label: "Option 2",
          },
        ],
      },
      {
        key: "g2",
        label: "Item 2",
        type: "group",
        children: [
          {
            key: "3",
            label: "Option 3",
          },
          {
            key: "4",
            label: "Option 4",
          },
        ],
      },
    ],
  },
  {
    key: "sub3",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub4",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub5",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      {
        key: "13",
        label: "Option 13",
      },
      {
        key: "14",
        label: "Option 14",
      },
    ],
  },
];
const App = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="flex: lg:hidden w-full h-fit bg-red-600">
      <Menu
        onClick={onClick}
        style={{
          width: "100vw",
        }}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default App;
