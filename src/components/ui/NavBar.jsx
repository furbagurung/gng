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
            label: (
              <NavLink to="catalog/cushionfoundation">
                Cushion - Foundation
              </NavLink>
            ),
          },
          {
            key: "2",
            label: <NavLink to="catalog/cushionfoundation">Foundation</NavLink>,
          },
          {
            key: "3",
            label: <NavLink to="catalog/primer">Primer</NavLink>,
          },
          {
            key: "4",
            label: <NavLink to="catalog/powder">Powder</NavLink>,
          },
          {
            key: "5",
            label: <NavLink to="catalog/facepimer">Face Primer</NavLink>,
          },
          {
            key: "6",
            label: <NavLink to="catalog/settingspray">Setting Spray</NavLink>,
          },
          {
            key: "7",
            label: (
              <NavLink to="catalog/colorcorrectingpalette">
                Color Correcting Palette
              </NavLink>
            ),
          },
          {
            key: "8",
            label: <NavLink to="catalog/contour">Contour</NavLink>,
          },
          {
            key: "9",
            label: <NavLink to="catalog/concealer">Concealer</NavLink>,
          },
        ],
      },
      {
        key: "g2",
        label: "Cheek",

        children: [
          {
            key: "10",
            label: <NavLink to="catalog/blusher">Blusher</NavLink>,
          },
          {
            key: "11",
            label: <NavLink to="catalog/bronzer">Bronzer</NavLink>,
          },
          {
            key: "12",
            label: <NavLink to="catalog/highlighter">Highlighter</NavLink>,
          },
        ],
      },
      {
        key: "g3",
        label: "Eye",
        children: [
          {
            key: "13",
            label: <NavLink to="catalog/eyepalettes">Eyepalettes</NavLink>,
          },
          {
            key: "14",
            label: <NavLink to="catalog/mascara">Mascara</NavLink>,
          },
          {
            key: "15",
            label: <NavLink to="catalog/eyeliner">Eyeliner</NavLink>,
          },
          {
            key: "16",
            label: <NavLink to="catalog/eyebrow">Eyebrow</NavLink>,
          },
          {
            key: "17",
            label: <NavLink to="catalog/eyelash">Eyelash</NavLink>,
          },
        ],
      },
      {
        key: "g4",
        label: "Lip",
        children: [
          {
            key: "14",
            label: <NavLink to="catalog/lipoil">Lip Oil</NavLink>,
          },
          {
            key: "15",
            label: <NavLink to="catalog/lipbalm">Lip balm</NavLink>,
          },
          {
            key: "16",
            label: <NavLink to="catalog/lipsticks">Lip Sticks</NavLink>,
          },
          {
            key: "17",
            label: <NavLink to="catalog/lipgloss">Lip Gloss</NavLink>,
          },
          {
            key: "18",
            label: <NavLink to="catalog/lipliner">Lip Liner</NavLink>,
          },
          {
            key: "19",
            label: <NavLink to="catalog/lipplumper">Lip Plumper</NavLink>,
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
