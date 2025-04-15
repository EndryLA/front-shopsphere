import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) :Observable<HttpEvent<any>> {


    const token = localStorage.getItem("authToken")

    if (!token) {
        return next(req);
    }

    const headers = new HttpHeaders({Authorization : `Bearer ${token}`})

    const request = req.clone({headers})

    return next(request)
}