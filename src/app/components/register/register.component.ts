import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any

  register() {
    this.usersService.register(this.user).subscribe((data: any) => {
      localStorage.setItem('token', data.token)
    });
  }
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.user = {}
  }

}
