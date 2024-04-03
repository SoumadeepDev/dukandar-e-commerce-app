import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission at Dukandar is to provide customers with a seamless shopping experience, offering a wide range of high-quality products and exceptional service.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "At Dukandar, our vision is to become the go-to destination for online shopping, known for our reliability, convenience, and commitment to customer satisfaction.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "With a rich history of serving customers since our inception, Dukandar has grown into a trusted brand synonymous with quality, value, and innovation.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
