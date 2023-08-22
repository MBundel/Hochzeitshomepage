import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    '../../../styles/general.scss',
    'contact.scss',
    '../../../styles/general_components/_images.scss',
    '../../../styles/icon.scss',

  ]
})
export class ContactComponent {
  contactLinks = [
    {
      href: 'https://wa.me/4917684415706',
      iconUrl: '/assets/icons/whatsAppLight.svg',
      iconWidth: 90,
      text: 'whatsApp me'
    },
    {
      href: 'tel:+4917684415706',
      iconUrl: '/assets/icons/callWhite.svg',
      iconWidth: 100,
      text: 'call me: 0176 844 157 06'
    },
    {
      href: 'mailto:michel@bundel.eu',
      iconUrl: '/assets/icons/emailLight.svg',
      iconWidth: 100,
      text: 'mail me:  michel@bundel.eu'
    }
  ];
}
