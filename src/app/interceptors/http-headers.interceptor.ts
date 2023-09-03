import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
    
export class HttpHeadersInterceptors implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
      req = req.clone({
        setHeaders: {
          'X-RapidAPI-Key':
            '91cc30b9f0mshcd16aeb5a2a7ffep109de7jsn32400f7fe2fc',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
          key: '087800018e42490099d7793f8d71768c',
        },
      });
      return next.handle(req);
  };
}