import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
  { title: "A book", price: 12.99 },
  { title: "A Carpet", price: 89.99 },
];
// const p1 = new Product("A Book", 12.99);

const loadedProduct = plainToClass(Product, products);
// products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

for (const prod of loadedProduct) {
  console.log(prod.getInformation());
}

// console.log(p1.getInformation());

// console.log(_.shuffle([1, 2, 3, 4, 5]));
