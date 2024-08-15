import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is authenticated
  return authService.token.pipe(
    map(token => {
      if (token) {
        // User is authenticated, allow access
        return true;
      } else {
        // User is not authenticated, redirect to login page
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
