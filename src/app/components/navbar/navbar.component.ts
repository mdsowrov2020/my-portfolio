// navbar.component.ts

import { Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  logo: string = '<MdSowrov/>';
  constructor(private sidebarService: SidebarService) {}

  onHamburgerClick() {
    // Pass the state of the sidebar (true for open, false for close)
    this.sidebarService.toggleSidebar(true); // or this.sidebarService.toggleSidebar(false);
    console.log('Clicked');
  }
}
