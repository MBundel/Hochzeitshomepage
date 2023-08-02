import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}              from "./sites/home/home.component";
import {PortfolioComponent}              from "./sites/portfolio/portfolio.component";

const routes: Routes = [
  {path:"",                         component:  HomeComponent},
  {path:"portfolio",               component:  PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
