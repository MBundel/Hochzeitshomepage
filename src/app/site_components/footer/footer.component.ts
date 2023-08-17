import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links = [
    { routerLink: '/impressum', iconUrl: '/assets/icons/impressum.svg', iconWidth: 50, name: 'Impressum' },
    { href: 'https://www.instagram.com/capturemotions_/', iconUrl: '/assets/icons/insta.svg', iconWidth: 50, name: 'Instagram' },
    { href: 'https://bundel.eu', iconUrl: '/assets/icons/home.svg', iconWidth: 70, name: 'Hauptseite' },
    { routerLink: '/kontakt', iconUrl: '/assets/icons/contact.svg', iconWidth: 80, name: 'Kontakt' },
    { routerLink: '/impressum', iconUrl: '/assets/icons/privacy.svg', iconWidth: 80, name: 'Datenschutz' },
    { href: 'https://github.com/MBundel/Hochzeitshomepage', iconUrl: '/assets/icons/git.svg', iconWidth: 50, name: 'Git Repository' }
  ];

}
