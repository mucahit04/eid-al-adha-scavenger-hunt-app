import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  group = '';
  error = '';

  constructor(private auth: AuthService) {}

  async login() {
    try {
      await this.auth.login(this.email, this.password, this.group);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
