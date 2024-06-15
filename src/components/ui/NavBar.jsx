import { AppstoreOutlined } from "@ant-design/icons";
import {
  HomeIcon,
  PhotoIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";

import { Menu } from "antd";
import { NavLink } from "react-router-dom";
// import { HomeIcon } from "@heroicons/react/20/solid";
const items = [
  {
    key: "sub1",
    label: <NavLink to="/">Home</NavLink>,
    icon: <HomeIcon className="h-4 w-4 text-gray-500" />,
  },
  {
    key: "sub2",
    label: "Catalog",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "g1",
        label: "Face",

        children: [
          {
            key: "1",
            label: "Cushion - Foundation",
          },
          {
            key: "2",
            label: "Foundation ",
          },
          {
            key: "3",
            label: "primer ",
          },
          {
            key: "4",
            label: "Powder ",
          },
          {
            key: "5",
            label: "Face Primer ",
          },
          {
            key: "6",
            label: "Setting Spray ",
          },
          {
            key: "7",
            label: "Collor Correcting Palette ",
          },
          {
            key: "8",
            label: "Contour ",
          },
          {
            key: "9",
            label: "Concealer ",
          },
        ],
      },
      {
        key: "g2",
        label: "Cheek",

        children: [
          {
            key: "10",
            label: "Blusher",
          },
          {
            key: "11",
            label: "Bronzer",
          },
          {
            key: "12",
            label: "Highlighter ",
          },
        ],
      },
      {
        key: "g3",
        label: "Eye",
        children: [
          {
            key: "13",
            label: "Eye Palettes",
          },
          {
            key: "14",
            label: "Mascara",
          },
          {
            key: "15",
            label: "Eyeliner",
          },
          {
            key: "16",
            label: "Eyebrow",
          },
          {
            key: "17",
            label: "Eyelash",
          },
        ],
      },
      {
        key: "g4",
        label: "Lip",
        children: [
          {
            key: "14",
            label: "Lip Oil",
          },
          {
            key: "15",
            label: "Lip Balm",
          },
          {
            key: "16",
            label: "Lip Sticks",
          },
          {
            key: "17",
            label: "Lip Gloss",
          },
          {
            key: "18",
            label: "Lip Liner",
          },
          {
            key: "19",
            label: "Lip Plumper",
          },
        ],
      },
    ],
  },
  {
    key: "sub3",
    label: "Gossip Galleries",
    icon: <PhotoIcon className="h-4 w-4" />,
    children: [
      {
        key: "20",
        label: "Gossip Events",
      },
      {
        key: "6",
        label: "Gossip Memories",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub5",
    label: "Contact Us",
    icon: <PhoneArrowDownLeftIcon className="h-4 w-4" />,
  },
];
const App = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: "100vw",
      }}
      mode="inline"
      items={items}
    />
  );
};
export default App;
