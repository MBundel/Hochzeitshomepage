import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../styles/general.scss', './navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  menuItems = [
    { route: '/',           label: 'Home' },
    { route: '/portfolio',  label: 'Portfolio' },
    { route: '/kontakt',    label: 'Kontakt' },
    { route: '/faq',        label: 'FAQ' },
    { route: '/about-me',   label: 'About me' }
  ];

}
