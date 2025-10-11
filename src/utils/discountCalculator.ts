
import Product from "../models/Product";

export function calculateDiscount(product: Product){
    return product.getPriceWithDiscount();
}