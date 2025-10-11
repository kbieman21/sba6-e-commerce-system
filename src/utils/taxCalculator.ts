

/*
This function should return the dollar amount that a product is taxed at. For example, if a product costs 
100 andistaxedat10100andistaxedat1010.
Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.
*/

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




const TAX_RATE = 4.75;
const G_Tax_Rate = 3;

// export function calculateTax(product: Product){
// //ALL PRODUCT WILL BE TAXED AT 4.75%, BUT IF THE CATEGORY IS GROCERY THEY WILL BE TAXED AT 3%

// // if product is grocerie => product.price * (3 / 100); else
//     if(product.category === 'groceries'){
//         product.price * (3 /100);
//     }
//     return product.price * (TAX_RATE / 100);  //THIS IS JUST A PLACE HOLDER I DON'T HAVE A FUNCTION THAT CALCULATE A TAX OF A PRODUCT AS OF YET

// }

 export function calculateTax(price:number, category:string) {
    if(category !== 'groceries'){
         return price * (TAX_RATE / 100);  //THIS IS JUST A PLACE HOLDER I DON'T HAVE A FUNCTION THAT CALCULATE A TAX OF A PRODUCT AS OF YET
    }else{
         return price * (G_Tax_Rate / 100); 
    }
     
}


