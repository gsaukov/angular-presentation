import { Component } from '@angular/core';

@Component({
  selector: 'app-router-component',
  templateUrl: './router-component.component.html',
  styleUrl: './router-component.component.scss'
})
export class RouterComponentComponent {
  invocations = '<!--NAVIGATION-->\n' +
    '<mat-nav-list>\n' +
    '  <a mat-list-item routerLink="/introduction" (click)="onSidenavClose()">\n' +
    '    <span class="nav-caption">Introduction</span>\n' +
    '  </a>\n' +
    '  <a mat-list-item routerLink="/history" (click)="onSidenavClose()">\n' +
    '    <span class="nav-caption">History</span>\n' +
    '  </a>\n' +
    '  <a mat-list-item routerLink="/framework" (click)="onSidenavClose()">\n' +
    '    <span class="nav-caption">Framework</span>\n' +
    '  </a>\n' +
    '  <a mat-list-item routerLink="/dependencies" (click)="onSidenavClose()">\n' +
    '    <span class="nav-caption">Dependenices</span>\n' +
    '  </a>\n' +
    '</mat-nav-list>\n'
  routes = '// ROUTES\n' +
    'const routes: Routes = [\n' +
    '  {path: \'\', component: SiteLayoutComponent, children: [\n' +
    '    { path: \'\', redirectTo: \'/introduction\', pathMatch: \'full\' },\n' +
    '    { path: \'introduction\', component: IntroductionComponent},\n' +
    '    { path: \'history\', component: HistoryAppComponent},\n' +
    '    { path: \'framework\', component: FrameworkAppComponent},\n' +
    '    { path: \'dependencies\', component: DependenciesAppComponent},\n' +
    '  ]},\n' +
    '  {path: \'**\', component: PageNotFoundComponent}\n' +
    '];\n'

    code = this.routes + '\n\n' + this.invocations
}
