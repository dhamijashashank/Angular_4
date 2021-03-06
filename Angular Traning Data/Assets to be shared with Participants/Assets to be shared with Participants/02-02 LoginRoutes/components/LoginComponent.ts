/*
 * Angular
 */
import {Component} from '@angular/core';

/*
 * Services
 */
import {AuthService} from '../services/AuthService';

@Component({
  selector: 'login',
  templateUrl: 'Login.html'
})
export class LoginComponent {
  message: string;

  constructor(private authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
