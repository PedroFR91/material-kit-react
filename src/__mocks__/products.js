import { v4 as uuid } from "uuid";

export const products = [
  {
    id: uuid(),
    createdAt: "17/06/2022",
    description: "Producto",
    media: "/static/images/products/product_1.png",
    title: "Item 1",
    totalDownloads: "20",
  },
];
