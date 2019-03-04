import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {TokenStorage} from './token.storage';
import { tap, map, catchError } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    //let authReq = req;
    if (this.token.getToken() != null) {
        req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this .token.getToken())});
    }
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(req);
    return next.handle(req).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
            }
            return event;
        },error  =>{
            if (error instanceof HttpErrorResponse){
                console.log(error);
                if (error.status === 401) {
                    this.router.navigate(['Unauthorized']);
                }
              }
            }
        ));
        
  }

}