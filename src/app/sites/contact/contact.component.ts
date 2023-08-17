import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../styles/icon.scss', '../../../styles/general.scss']
})
export class ContactComponent {
  contactLinks = [
    { href: 'https://wa.me/4917684415706', iconUrl: '/assets/icons/whatsAppLight.svg', iconWidth: 90 },
    { href: 'tel:+4917684415706', iconUrl: '/assets/icons/callWhite.svg', iconWidth: 100 },
    { href: 'mailto:michel@bundel.eu', iconUrl: '/assets/icons/emailLight.svg', iconWidth: 100 }
  ];
}
