import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  register() {
    this.userService.register(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/login']);
    });
  }
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = {};
  }
}
