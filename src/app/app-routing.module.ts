import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteLayoutComponent} from "./navigation/site-layout/site-layout.component";
import {IntroductionComponent} from "./preview-app/introduction-app/introduction.component";
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component";
import {HistoryAppComponent} from "./preview-app/history-app/history-app.component";
import {FrameworkAppComponent} from "./preview-app/framework-app/framework-app.component";
import {DependenciesAppComponent} from "./preview-app/dependencies-app/dependencies-app.component";
import {DataSharingAppComponent} from "./preview-app/data-sharing-app/data-sharing-app.component";
import {TestingAppComponent} from "./preview-app/testing-app/testing-app.component";
import {ConclusionAppComponent} from "./preview-app/conclusion-app/conclusion-app.component";

// ROUTES
const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
    { path: '', redirectTo: '/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent},
    { path: 'history', component: HistoryAppComponent},
    { path: 'framework', component: FrameworkAppComponent},
    { path: 'dependencies', component: DependenciesAppComponent},
    { path: 'data-sharing', component: DataSharingAppComponent},
    { path: 'testing', component: TestingAppComponent},
    { path: 'conclusion', component: ConclusionAppComponent},
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
