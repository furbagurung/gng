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
              <NavLink to="cushionfoundation">Cushion - Foundation</NavLink>
            ),
          },
          {
            key: "2",
            label: <NavLink to="foundation">Foundation</NavLink>,
          },
          {
            key: "3",
            label: <NavLink to="primer">Primer</NavLink>,
          },
          {
            key: "4",
            label: <NavLink to="facepowder">Powder</NavLink>,
          },
          {
            key: "5",
            label: <NavLink to="faceprimer">Face Primer</NavLink>,
          },
          {
            key: "6",
            label: <NavLink to="settingspray">Setting Spray</NavLink>,
          },
          {
            key: "7",
            label: (
              <NavLink to="colorcorrectingpalette">
                Color Correcting Palette
              </NavLink>
            ),
          },
          {
            key: "8",
            label: <NavLink to="contour">Contour</NavLink>,
          },
          {
            key: "9",
            label: <NavLink to="concealer">Concealer</NavLink>,
          },
        ],
      },
      {
        key: "g2",
        label: "Cheek",

        children: [
          {
            key: "10",
            label: <NavLink to="blusher">Blusher</NavLink>,
          },
          {
            key: "11",
            label: <NavLink to="bronzer">Bronzer</NavLink>,
          },
          {
            key: "12",
            label: <NavLink to="highlighter">Highlighter</NavLink>,
          },
        ],
      },
      {
        key: "g3",
        label: "Eye",
        children: [
          {
            key: "13",
            label: <NavLink to="eyepalettes">Eyepalettes</NavLink>,
          },
          {
            key: "14",
            label: <NavLink to="mascara">Mascara</NavLink>,
          },
          {
            key: "15",
            label: <NavLink to="eyeliner">Eyeliner</NavLink>,
          },
          {
            key: "16",
            label: <NavLink to="eyebrow">Eyebrow</NavLink>,
          },
          {
            key: "17",
            label: <NavLink to="eyelash">Eyelash</NavLink>,
          },
        ],
      },
      {
        key: "g4",
        label: "Lip",
        children: [
          {
            key: "18",
            label: <NavLink to="lipoil">Lip Oil</NavLink>,
          },
          {
            key: "19",
            label: <NavLink to="lipbalm">Lip balm</NavLink>,
          },
          {
            key: "20",
            label: <NavLink to="lipsticks">Lip Sticks</NavLink>,
          },
          {
            key: "21",
            label: <NavLink to="lipgloss">Lip Gloss</NavLink>,
          },
          {
            key: "22",
            label: <NavLink to="lipliner">Lip Liner</NavLink>,
          },
          {
            key: "23",
            label: <NavLink to="lipplumper">Lip Plumper</NavLink>,
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
        key: "24",
        label: "Gossip Events",
      },
      {
        key: "25",
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
