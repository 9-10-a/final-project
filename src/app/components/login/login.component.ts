import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  login() {
    this.usersService.login(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/home']);
    });
  }

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.user = {};
  }
}
