import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  export class LoginComponent {
    username = '';
    password = '';
    errorMessage = '';
  
    constructor(private router: Router) {}
  
    login() {
      if (this.username === 'admin' && this.password === 'password') { // Replace with GraphQL API
        localStorage.setItem('token', 'mock-token'); // Store authentication token
        this.router.navigate(['/employees']); // Redirect to employee list
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    }
}
