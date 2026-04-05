import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Create a clean error message
      let errorMsg = '';
      
      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMsg = `[Client Error] ${error.error.message}`;
      } else {
        // Backend server error (like your 404)
        errorMsg = `[Backend Error] Status: ${error.status}, URL: ${error.url}`;
      }

      // Print the clean message instead of the giant object
      console.error(errorMsg);

      // Pass the error along so the rest of the app knows it failed
      return throwError(() => new Error(errorMsg));
    })
  );
};
