import { UserAdress } from "./UserAdress";

export interface User {

    id:number,
    firstname:String,
    lastname:String,
    email:String,
    password?:String,
    adress?:UserAdress
}