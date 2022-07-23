import { MdHome } from "react-icons/md";
import { FaProductHunt, FaUsers, FaCartArrowDown } from "react-icons/fa";

export interface ISideBarData {
  title: string;
  link: string;
  icon: JSX.Element;
}

export const SideData: ISideBarData[] = [
  {
    title: "Home",
    link: "/",
    icon: <MdHome size={"20px"} />,
  },
  {
    title: "Product",
    link: "/product",
    icon: <FaProductHunt size={"20px"} />,
  },
  {
    title: "Reseller",
    link: "/reseller",
    icon: <FaUsers size={"20px"} />,
  },

  {
    title: "Service",
    link: "/service",
    icon: <FaCartArrowDown size={"20px"} />,
  },
];
