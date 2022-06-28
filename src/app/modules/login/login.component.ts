import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './models/user.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: UserModel = new UserModel();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.loginService.login(this.model);
    // console.log(this.model.userName);
    // console.log(this.model.password);
    // console.log(this.loginService.isLoggedIn());
  }
}
