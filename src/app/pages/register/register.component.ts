import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email = '';
  password = '';
  group = '';
  error = '';

  constructor(private auth: AuthService) {}

  async register() {
    try {
      await this.auth.register(this.email, this.password, this.group);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
