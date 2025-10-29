/*
This function should return the dollar amount that a product is taxed at. For example, if a product costs 
100 andistaxedat10100andistaxedat1010.
Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.
*/

import { ValidationError, validationHandler } from "./errorHandler";

/*THE ABOVE REQUEIREMENT HAS BEEN ADDRESSED AS THE FOLLWOING*/

/*

the calculateTax()function should handle tax calculations for products.
This function should return the dollar amount that a product is taxed at.
We are not returning the total cost, only the tax amount in dollars.
Example:
 function calculateTax(price, taxRate) {
  return price * (taxRate / 100);
}

*/

// //ALL PRODUCT WILL BE TAXED AT 4.75%, BUT IF THE CATEGORY IS GROCERY THEY WILL BE TAXED AT 3%
const ALL_TAX_RATE = 4.75;
const GROCERY_TAX_RATE = 3;

export function calculateTax(price: number, category: string) {
  try {
    if (!category || price < 0) {
      throw new ValidationError("Invalid product category.");
    }

    if (category.toLocaleLowerCase() !== "groceries") {
      return price * (ALL_TAX_RATE / 100);
    } else {
      return price * (GROCERY_TAX_RATE / 100);
    }
  } catch (error) {
     validationHandler(error as ValidationError);
    return 0; // fallback
  }
}

// THIS IS FOR DEBUGGING PURPOSE ONLY
//console.log('Testing calculateTax function', calculateTax(200));
