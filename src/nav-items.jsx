import { HomeIcon, BookOpen, Users } from "lucide-react";
import Home from "./pages/Home.jsx";
import ProductOffering from "./pages/ProductOffering.jsx";
import About from "./pages/About.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Product Offering",
    to: "/product-offering",
    icon: <BookOpen className="h-4 w-4" />,
    page: <ProductOffering />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
];