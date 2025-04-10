import { productCategory } from "./ProductCategory";
import { ProductInventory } from "./ProductInventory";

export interface Product {

    id:number,
    name:String,
    description:String,
    mainSpecs:String,
    price:number,
    productCategory:productCategory,
    quantity:ProductInventory,
    rating:number,
    totalReviews?:number
}