import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteLayoutComponent} from "./navigation/site-layout/site-layout.component";
import {IntroductionComponent} from "./preview-app/introduction-app/introduction.component";
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
    { path: '', redirectTo: '/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent},
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
