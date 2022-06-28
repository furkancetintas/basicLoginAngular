import { Component, OnInit } from '@angular/core';
import { faPlus, faArrowRightFromBracket, faHouse } from "@fortawesome/free-solid-svg-icons";
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faHouse = faHouse;
  faPlus = faPlus;
  faArrowRightFromBracket = faArrowRightFromBracket;

  isOpen: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  logOut() {
    this.loginService.logOut();
  }
}
