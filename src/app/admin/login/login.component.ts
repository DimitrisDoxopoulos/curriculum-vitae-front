import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EyeSvgComponent } from '../helperComponents/eye-svg/eye-svg.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, EyeSvgComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        const token = response.token;
        if (token) {
          this.authService.setToken(token);
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Login failed: Invalid response';
        }
      },
      error: () => (this.errorMessage = 'Invalid username or password'),
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
