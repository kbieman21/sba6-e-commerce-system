//THIS PAGE IS FOR TEST ONLY

import Product from "./models/Product";
import { calculateTax } from "./utils/taxCalculator.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";
import { processOrder } from "./utils/errorHandler.ts";
import {
  APIError,
  handleAPIError,
  ValidationError,
  validationHandler,
} from "./utils/errorHandler";
import { getProducts } from "./services/apiService.ts";

async function test() {
  // Create multiple physical products for test
  const myProducts = await getProducts(1); //This is actual product from API

  //const keyboard = new Product(123, 100, 150, "groceries"); // this is test product
  //const laptop = new Product(124, 200, 20, "groceries" );
  //const myProducts = [keyboard];

  let counter: number;
  counter = 1;
  for (const product of myProducts) {
    //id:number, price:number, discountPercentage:number, category:string
    const singleProduct = new Product(
      product.id,
      product.price,
      product.discountPercentage,
      product.category
    );

    //cnsole.log(`Before Testing: Keyboard: ${keyboard}, Single product: ${singleProduct}, My Product: ${myProducts}`);

    console.log("Testing starts here");
    console.log(`Product# ${counter}`);

    //Testing discountCalculator.ts
    //console.log("Discount amount: ", calculateDiscount(product));
    console.log("Discount amount: ", calculateDiscount(singleProduct));

    // Testing taxCalculator.ts
    // Polymorphic behavior
    // console.log(
    //   "Tax Amount: $" + calculateTax(product.price, product.category).toFixed(2)
    // );
    console.log(
      "Tax Amount: $" + calculateTax(singleProduct.price, singleProduct.category).toFixed(2)
    );

    //Testing Product.ts
    console.log("Products detail: ", singleProduct.displayDetails());

    // Testing apiService.ts
    // getProducts()
    //   .then((data) => console.log("Fetched products:", data.slice(0, 1)))
    //   .catch((err) => console.error(err));

    // Testing errorHandler.ts

    //calculateDiscount(product); // logs Validation Error: Product price cannot be negative.
    calculateDiscount(product); // logs Validation Error: Discount percentage must be between 0 and 100.
    calculateTax(product.price, product.category); // logs Validation Error: Product price cannot be negative.
    calculateTax(product.price, product.category); // logs Validation Error: Invalid product category.
    counter++;
  }
}

test();
