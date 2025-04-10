import { OrderDetails } from "./OrderDetails";
import { Product } from "./Product";

export interface OrderItem {

    int:number,
    quantity:number,
    order:OrderDetails,
    product:Product

}