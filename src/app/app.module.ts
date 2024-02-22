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
import { IntroductionComponent } from "./preview-app/introduction-app/introduction.component";
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor-v2';
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
import {DataSharingAppComponent} from "./preview-app/data-sharing-app/data-sharing-app.component";
import {TestingAppComponent} from "./preview-app/testing-app/testing-app.component";
import {ConclusionAppComponent} from "./preview-app/conclusion-app/conclusion-app.component";
import {MutationObserverService} from "./services/mutation-observer.service";
import {NavigationBlockedComponent} from "./navigation/navigation-blocked/navigation-blocked.component";


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad
};

function onMonacoLoad() {
  (window as any).monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true,
  });
}

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    PageNotFoundComponent,
    NavigationBlockedComponent,
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
    PipeComponentComponent,
    DataSharingAppComponent,
    TestingAppComponent,
    ConclusionAppComponent
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
    MonacoEditorModule.forRoot(monacoConfig),
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
  constructor(private mutationObserverService: MutationObserverService) { //eager service initialization otherwise lazy on component load
  }

}
