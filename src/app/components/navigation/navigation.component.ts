import { Component, OnInit } from '@angular/core';

import { navItems as navSections } from 'src/app/const';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navItems = [];

  ngOnInit(): void {
    this.navItems = navSections;
  }
}
