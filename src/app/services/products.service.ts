import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Page } from "../interfaces/Page";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/Product";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {

    private apiUrl = environment.apiUrl;
    private http = inject(HttpClient)

    
    getProducts() :Observable<Page<Product>>{

        return this.http.get<Page<Product>>(`${this.apiUrl}/public/products`)

    }

    getProductById(id: number) :Observable<Product>{

        return this.http.get<Product>(`${this.apiUrl}/public/products/${id}`)

    }


}