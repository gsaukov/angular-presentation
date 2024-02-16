import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from "./navigation/site-layout/site-layout.component";
import { PageNotFoundComponent } from "./navigation/page-not-found/page-not-found.component";
import { CounterDirective } from "./navigation/page-not-found/counter.directive";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { PreviewAppComponent } from './preview-app/preview-app.component';
import { AppRoutingModule } from "./app-routing.module";
import { MatImportsModule } from "./mat-imports.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderInterceptor } from "./header-interceptor";
import { RouterOutlet } from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IntroductionComponent } from "./preview-app/introduction-app/introduction.component";
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CliComponentComponent } from "./preview-app/framework-app/cli-component/cli-component.component";
import { ComponentComponentComponent } from "./preview-app/framework-app/component-component/component-component.component";
import { FrameworkAppComponent } from "./preview-app/framework-app/framework-app.component";
import { IgxButtonModule, IgxCarouselModule, IgxIconModule, IgxInputGroupModule, IgxListModule, } from "igniteui-angular";
import {EditorComponent} from "./preview-app/editor/editor.component";
import {ServiceComponentComponent} from "./preview-app/framework-app/service-component/service-component.component";
import {
  PlaceQueryResultsComponent
} from "./preview-app/framework-app/service-component/place-query-results/place-query-results.component";
import {
  DirectiveComponentComponent
} from "./preview-app/framework-app/directive-component/directive-component.component";
import {RouterComponentComponent} from "./preview-app/framework-app/router-component/router-component.component";
import { DependenciesAppComponent } from './preview-app/dependencies-app/dependencies-app.component';
import {PipeComponentComponent} from "./preview-app/framework-app/pipe-component/pipe-component.component";


//I keep the new line
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
    FrameworkAppComponent,
    CliComponentComponent,
    ComponentComponentComponent,
    ServiceComponentComponent,
    PlaceQueryResultsComponent,
    DirectiveComponentComponent,
    RouterComponentComponent,
    DependenciesAppComponent,
    PipeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule,
    MatImportsModule,
    MonacoEditorModule.forRoot(),
    IgxCarouselModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    EditorComponent,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    PlaceQueryResultsComponent
  ]
})
export class AppModule {
}
