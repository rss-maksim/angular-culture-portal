import { Component, OnInit } from '@angular/core';

import { navItems } from 'src/app/const';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navSections = [];

  ngOnInit(): void {
    this.navSections = navItems;
  }
}
