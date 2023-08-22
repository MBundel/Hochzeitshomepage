import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideStorage,getStorage } from '@angular/fire/storage';
// import { AngularFireModule} from '@angular/fire/compat';
import { NavbarComponent } from './site_components/navbar/navbar.component';
import { FooterComponent } from './site_components/footer/footer.component';
import { HomeComponent } from './sites/home/home.component';
import { PortfolioComponent } from './sites/portfolio/portfolio.component';
import { ContactComponent } from './sites/contact/contact.component';
import { ImpressumComponent } from './sites/impressum/impressum.component';
import { FaqComponent } from './sites/faq/faq.component';
import { CallToActionComponent } from './site_components/call-to-action/call-to-action.component'
import {NgOptimizedImage} from "@angular/common";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    ImpressumComponent,
    FaqComponent,
    CallToActionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        RouterModule,
      // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAnalytics(() => getAnalytics()),
        // provideStorage(() => getStorage())
    ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
