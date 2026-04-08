import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Ensure that all cross-domain API requests carry cookies automatically.
  req = req.clone({
    withCredentials: true
  });

  return next(req);
};
