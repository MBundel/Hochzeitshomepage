import { Component } from '@angular/core';
import {Link} from "./footer.Interfaces";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {




  links: Link[] = [
    { routerLink: '/', iconUrl: '/assets/icons/home.svg', iconWidth: 50, name: 'Home' },
    { href: 'https://www.instagram.com/capturemotions_/', iconUrl: '/assets/icons/insta.svg', iconWidth: 35, name: 'Instagram' },
    { routerLink: '/kontakt', iconUrl: '/assets/icons/contact.svg', iconWidth: 50, name: 'Kontakt' },
    { href: 'https://bundel.eu', iconUrl: '/assets/icons/mainpage.svg', iconWidth: 50, name: 'Hauptseite' },
    { routerLink: '/impressum', iconUrl: '/assets/icons/privacy.svg', iconWidth: 50, name: 'Datenschutz' },
    { routerLink: '/impressum', iconUrl: '/assets/icons/impressum.svg', iconWidth: 25, name: 'Impressum' },
    { href: 'https://github.com/MBundel/Hochzeitshomepage', iconUrl: '/assets/icons/git.svg', iconWidth: 30, name: 'Git Repository' }
  ];

}
