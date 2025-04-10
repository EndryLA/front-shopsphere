import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/User";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {


    private apiUrl:string = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login(user: User) {

        const requestBody = {
            email:user.email,
            password:user.password
        }
        
        return this.http.post<any>(`${this.apiUrl}/auth/login`,requestBody)

    }

    register(user: User) : Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/auth/register`,user)
    }

    isLogedIn() :boolean {
        
        const token = localStorage.getItem("authToken")

        if (!token) {
            return false;
        } 

        return true;
    }



}