import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      
      // SSR (Node.js) ortamında ErrorEvent tanımlı değildir, bu yüzden kontrol ekliyoruz
      if (typeof ErrorEvent !== 'undefined' && error.error instanceof ErrorEvent) {
        errorMsg = `[Client Error] ${error.error.message}`;
      } else {
        // Backend'den gelen hata (Senin Spring Boot GlobalExceptionHandler'ından gelen cevap)
        errorMsg = `[Backend Error] Status: ${error.status}, URL: ${error.url}, Message: ${error.error?.message || error.message}`;
      }

      console.error(errorMsg);
      return throwError(() => new Error(errorMsg));
    })
  );
};
