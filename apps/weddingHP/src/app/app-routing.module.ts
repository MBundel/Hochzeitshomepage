import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { PortfolioComponent } from './sites/portfolio/portfolio.component';
import { ImpressumComponent } from './sites/impressum/impressum.component';
import { ContactComponent } from './sites/contact/contact.component';
import { FaqComponent } from './sites/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
