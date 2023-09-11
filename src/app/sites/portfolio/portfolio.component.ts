import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; // Beachten Sie die Änderung hier für Kompatibilitätsmodus
import { firebaseConfig } from "../../../environments/environment";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.scss', '../../../styles/general.scss']
})
export class PortfolioComponent implements OnInit {
  imageUrls: string[] = []; // Ein Array für alle Bild-URLs

  ngOnInit() {
    // Nur Firebase initialisieren, wenn es noch nicht initialisiert wurde
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const storageRef = firebase.storage().refFromURL('gs://hochzeiten/vorschau');

    storageRef.listAll().then(result => {
      let pendingDownloads = result.items.length; // Zählt, wie viele Download-URLs noch geholt werden müssen
      result.items.forEach(itemRef => {
        itemRef.getDownloadURL().then(url => {
          this.imageUrls.push(url); // Die URL zum Array hinzufügen
          pendingDownloads--;
          if (pendingDownloads === 0) {
            console.log("download finished")
          }
        }).catch(error => {
          console.error('Error getting download URL:', error);
        });
      });
    }).catch(error => {
      console.error('Error listing files:', error);
    });
  }

}
