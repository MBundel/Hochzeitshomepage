import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../../../styles/general.scss'],
})
export class FaqComponent {
  public isOpen: boolean[] = [];
  lastQuestion: number = 0;

  constructor() {
    this.isOpen = new Array(this.faqList.length).fill(false);
  }

  toggleContent(index: number): void {
    this.isOpen[this.lastQuestion] = false;
    this.isOpen[index] = !this.isOpen[index];
    this.lastQuestion = index;
  }
  experience: number = new Date().getFullYear() - 2011;

  faqList = [
    {
      frage: 'Wie lange fotografierst du schon?',
      antwort: `Seit ${this.experience} Jahren. Während meiner Ausbildung und im Studium habe ich mir das Fotografieren
       autodidaktisch beigebracht.`,
    },
    {
      frage: 'Können wir uns vorher kennenlernen?',
      antwort: `Natürlich können wir uns vorher kennenlernen. Schließlich sollt ihr euch auf eurem Tag auch sehr wohl fühlen.
      Vor Ort oder per Webcam ist möglich.`,
    },
    {
      frage:
        'Was macht dir beim Fotografieren am meisten Spaß, bzw. was  zeichnet deine Fotografie aus?',
      antwort:
        'Am liebsten begleite ich eine Hochzeit von Start bis Ende. In den Momenten, bei denen sich die Menschen' +
        ' unbeobachtet fühlen und ganz natürlich sind, entstehen die schönsten und ehrlichsten Fotos. Diese Momente ' +
        'festzuhalten sind für mich das Highlight einer jeden Veranstaltung',
    },
    {
      frage: 'Welche Pakete und Preisstufen bietest du an?',
      antwort:
        'Ich rechne nach Stunden oder Tagessatz. Es handelt sich dann um einen Festpreis, es kommen keine weiteren ' +
        'Gebühren o.ä. hinzu.',
    },
    {
      frage: 'Was ist in dem Preis enthalten?',
      antwort:
        'Natürlich, dass ich vor Ort bin und Bilder schieße, die Nachbearbeitung ist selbstverständlich bereits ' +
        'inklusive im Preis einhalten.',
    },
    {
      frage: 'Wie viele Bilder bekommen wir?',
      antwort:
        'Das kommt natürlich darauf an, wie lange ich vor Ort bin und was alles passiert. Bei einem reinen  ' +
        'Standesamtbesuch mit 6 Personen wird es natürlich weniger Bilder geben als bei einer 16 Stunden Hochzeit mit ' +
        '100 Gästen . Damit kann die Range zwischen 100 und 1.500 Bildern liegen',
    },
    {
      frage: 'Warum sind einige Bilder nur Schwarz-Weiß?',
      antwort:
        'Manchmal ist das Licht so ungünstig, dass es in Farbe furchtbar aussieht. In Schwarz-Weiß sieht das Bild dann' +
        'sehr schön aus, in Farbe wäre es dann extrem bläulich oder orange.',
    },
    {
      frage: 'Wie bekomme ich die Bilder und wie ist es mit den Bildrechten?',
      antwort:
        'Aktuell erhaltet ihr nach Bezahlung einen WeTransfer-Link. Bei diesem habt ihr eine Woche Zeit, alle' +
        ' bearbeiteten Bilder herunterzuladen. Dieser Link kann auch beliebig oft verteilt werden. Bei den Bild- bzw. Nutzungsrechten' +
        ' halte ich es sehr simpel: Macht mit den Bildern, was irh wollt. Solange niemand behauptet, die selbst geschossen zu haben ist alles ok' +
        ' Ihr könnt sie überall hochladen, ausdrucken und beliebig oft vervielfältigen. Über eine Verlinkung über Social Media würde ich mich freuen,' +
        ' ist aber kein muss.',
    },
    {
      frage: 'Können wir auch auch die unbearbeiteten Fotos bekommen?',
      antwort:
        'Meine Kamera produziert, RAW- und keine JPG-Dateien beim Fotoschießen. Diese sind um einiges besser für die' +
        ' Nachbearbeitung geeignet. Diese RAW-Dateien sind 20mb groß und können nicht überall angezeigt werden. Die Bilder,' +
        ' die ihr nicht enthalten habt, sind nicht schön - unscharf, falsche Belichtung, jemand  war besonders nicht-fotogen.' +
        ' Von daher haben sie keinen Mehrwert - wer sie unbedingt möchte, kann sie als Paket kaufen: Preis € = Anzahl der Bilder. ' +
        '(Das lohnt sich NICHT.)',
    },
    {
      frage: 'Was tun, wenn wir unsere Bilder verbummelt haben?',
      antwort:
        'In der Regel speichere ich die Bilder auf einer externen Festplatte so lange wie möglich. Nach 10 Jahren musste ich dann' +
        'doch mal hin und wieder die RAW-Dateien löschen, konnte bisher die bearbeiteten Fotos bisher behalten. Es gibt jedoch keine Garantie.',
    },
    {
      frage: 'Veröffentlichst du unsere Bilder?',
      antwort: 'Nur in Absprache mit euch.',
    },
    {
      frage: 'Wie ist das mit der Bezahlung?',
      antwort:
        ' Der Ablauf sieht so aus: Fotoshooting - Nachbearbeitung - Bezahlung - Aushändigung der Bilder. So ist jeder motiviert, ' +
        'möglichst schnell seinen Soll zu erfüllen ',
    },
    {
      frage: 'Was passiert, wenn du krank wirst?',
      antwort:
        'Das ist bisher noch nie vorgekommen. Fall es doch vorkommen sollte, kommt eine Ersatzperson, die auch fotografisch talentiert ist. ',
    },
    {
      frage: 'Darf ich dich weiterempfehlen?',
      antwort:
        'Ich finde das ja lieb, dass vorher gefragt wird. Ja na klar, gerne!',
    },
    {
      frage: 'Machst du das hauptberuflich?',
      antwort:
        'Ich habe mich das im Studium gefragt, ob ich das hauptberuflich machen möchte, da die Nachfrage nach mir auch den Einstieg einfach gemacht hätte. ' +
        'Jedoch habe ich festgestellt, wenn ich zu viele Shootings habe, dass es für mich nur noch ein Abarbeiten nach Schema F ist. Für mich ' +
        'klingt es nicht fair, wenn es für euch ein sehr besonderer Tag sein soll, aber für den Fotografen ein 0815 Tag ist. Demnach bleibt es bei mir' +
        'bei einer Leidenschaft, weil ich fotografieren möchte und nicht muss. Diese Leidenschaft spiegelt sich dann auch in meiner Arbeit wieder.',
    },
  ];
}
