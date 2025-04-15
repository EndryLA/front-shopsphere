import { Injectable } from "@angular/core";
import { Product } from "../interfaces/Product";
import { CartItem } from "../interfaces/CartItem";

@Injectable({providedIn: 'root'})
export class CartService{

    cartItems :CartItem[] = []


    addToCart(productToAdd :Product) :void {

        const existingItem = this.cartItems.find(cartItem => cartItem.product.id === productToAdd.id )

        if (existingItem) {

            existingItem.quantity++;

        } else {

            const ItemToAdd: CartItem = {
                product:productToAdd,
                quantity:1
            }
            console.log("added to cart product :" + productToAdd)
            this.cartItems.push(ItemToAdd)
        }
        console.log(this.getNumberOfItems())

    }

    removeFromCart(productId: number) :void {
        this.cartItems = this.cartItems.filter(item => item.product.id !== productId)
    }

    getCartItems() :CartItem[] {
        return this.cartItems;
    }

    getNumberOfItems():number {
        return this.cartItems.length;
    }

    getTotalQuantity(): number {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
      }


    getTotalPrice(): number {
        console.log("Calculating total price...");
        let total = 0;
        
        this.cartItems.forEach(item => {
            total += item.product.price * item.quantity;
        });
        
        console.log("Total price:", total);
        return total;
        }


    clearCart() :void {
        this.cartItems = []
    }

    incrementQuantity(cartItem: CartItem) {
        let item = this.cartItems.find(item => item.product.id === cartItem.product.id)
        if (item) {
            item.quantity++;
            //triggers update for component change detect
            this.cartItems = [...this.cartItems];
        }
    }
    
    decrementQuantity(cartItem: CartItem) {
        let item = this.cartItems.find(item => item.product.id === cartItem.product.id)
        if (item) {
            item.quantity--;
            
            if (item.quantity <= 0) {
                this.cartItems = this.cartItems.filter(i => i.product.id !== cartItem.product.id);
                this.cartItems = [...this.cartItems];

            } else {
                this.cartItems = [...this.cartItems];
            }
        }
    }

}