//import PhysicalProduct from "./models/PhysicalProduct";
import Product from "./models/Product";

import {calculateTax} from "./utils/taxCalculator.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";
import {processOrder} from "./utils/errorHandler.ts"




// Create multiple physical products
//id:number, price:number, discountPercentage:number, category:string
const keyboard = new Product(123, 200, 2, "groceriess" );



// Store all product in one array (type inferred as base class Product[])
const myProducts = [keyboard];


let counter : number;
counter =1;
for(const product of myProducts){
    console.log(` Product # ${counter}`);
  console.log('Product ID', product.id);
  console.log('Product Price', product.price);
  console.log('Product Discount', calculateDiscount(product));
  console.log('Product Category', product.category);

  // Polymorphic behavior
    console.log("Tax Amount: $" + calculateTax(product.price, product.category).toFixed(2));   
    
    //Testing custom errors
    console.log('Error displayed for test', processOrder(product));

    //Testing custom API error
    console.log('API ERROR');
    
    
    counter++;
  
}




// fetch products
// try{
//   const prodcut

// }catch(e){

// }