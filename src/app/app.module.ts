import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SiteLayoutComponent} from "./navigation/site-layout/site-layout.component";
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component";
import {CounterDirective} from "./navigation/page-not-found/counter.directive";
import {HeaderComponent} from "./navigation/header/header.component";
import {SidenavListComponent} from "./navigation/sidenav-list/sidenav-list.component";
import {PreviewAppComponent} from './preview-app/preview-app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatImportsModule} from "./mat-imports.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderInterceptor} from "./header-interceptor";
import {RouterOutlet} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  IntroductionComponent
} from "./preview-app/introduction-app/introduction.component";



@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    PageNotFoundComponent,
    CounterDirective,
    HeaderComponent,
    SidenavListComponent,
    PreviewAppComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule,
    MatImportsModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
