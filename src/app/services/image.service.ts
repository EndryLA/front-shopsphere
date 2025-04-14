import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Image } from "../interfaces/Image";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ImageService {


    apiUrl = environment.apiUrl;
    http = inject(HttpClient)


    getProductImages(productId: number) : Observable<Image[]> {

        return this.http.get<Image[]>(`${this.apiUrl}/public/images/product/${productId}`)

    }


}