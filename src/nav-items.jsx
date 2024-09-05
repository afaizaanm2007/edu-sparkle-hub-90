import { HomeIcon, BookOpen, Users } from "lucide-react";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
];