import { Observable } from 'rxjs';
import { MenuItems } from './../../interfaces/MenuItems';
import { CoreService } from './../../services/core.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems!: MenuItems;

  constructor(private router:Router, private userService: UserService, private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.getMenuItems().subscribe((data) => {
      this.menuItems = data;
    });
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      this.router.navigate(['/landing']);
    });
  }
}