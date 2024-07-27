import {
  HomeIcon,
  LayoutDashboardIcon,
  LoginIcon,
  HeartIcon,
  ShoppingBagIcon
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Home",
    icon: HomeIcon,
    to: "/",
  },
  { header: "Shopping" },
  {
    title: "Cart",
    icon: ShoppingBagIcon,
    to: "/cart",
  },
  {
    title: "Favorites",
    icon: HeartIcon,
    to: "/wishlist",
  },
];

export default sidebarItem;
