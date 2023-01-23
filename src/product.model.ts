import { IsNotEmpty, IsNumber, IsPositive, validate } from "class-validator";

export class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors: ");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
console.log(newProd.getInformation());
