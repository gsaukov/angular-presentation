import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {SiteLayoutComponent} from "./navigation/site-layout/site-layout.component"
import {IntroductionComponent} from "./preview-app/introduction-app/introduction.component"
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component"
import {HistoryAppComponent} from "./preview-app/history-app/history-app.component"
import {FrameworkAppComponent} from "./preview-app/framework-app/framework-app.component"
import {DependenciesAppComponent} from "./preview-app/dependencies-app/dependencies-app.component"
import {DataSharingAppComponent} from "./preview-app/data-sharing-app/data-sharing-app.component"
import {TestingAppComponent} from "./preview-app/testing-app/testing-app.component"
import {ConclusionAppComponent} from "./preview-app/conclusion-app/conclusion-app.component"
import {AuthGuardService} from "./services/auth-guard.service"
import {NavigationBlockedComponent} from "./navigation/navigation-blocked/navigation-blocked.component"

// ROUTES
const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
    { path: '', redirectTo: '/introduction', pathMatch: 'full'},
    { path: 'introduction', component: IntroductionComponent, canActivate: [AuthGuardService]},
    { path: 'history', component: HistoryAppComponent, canActivate: [AuthGuardService]},
    { path: 'framework', component: FrameworkAppComponent, canActivate: [AuthGuardService]},
    { path: 'dependencies', component: DependenciesAppComponent, canActivate: [AuthGuardService]},
    { path: 'data-sharing', component: DataSharingAppComponent, canActivate: [AuthGuardService]},
    { path: 'testing', component: TestingAppComponent, canActivate: [AuthGuardService]},
    { path: 'conclusion', component: ConclusionAppComponent, canActivate: [AuthGuardService]},
  ]},
  {path: 'blocked', component: NavigationBlockedComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
