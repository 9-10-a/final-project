import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any;

  register() {
    this.usersService.register(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/login']);
    });
  }
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.user = {};
  }
}
