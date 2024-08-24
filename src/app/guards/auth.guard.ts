import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = (): Observable<boolean> => {
    return this.authService.token.pipe(
      map((token) => {
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  };
}
