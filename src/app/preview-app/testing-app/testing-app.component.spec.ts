import {ComponentFixture, TestBed} from '@angular/core/testing'
import {TestingAppComponent} from './testing-app.component'
import {BrowserModule, By} from "@angular/platform-browser"
import {HttpClientModule} from "@angular/common/http"
import {FormsModule } from "@angular/forms"
import {MatImportsModule} from "../../mat-imports.module"
import {MonacoEditorModule} from "ngx-monaco-editor-v2"
import {EditorComponent} from "../editor/editor.component"

describe('TestingAppComponent', () => {
  let component: TestingAppComponent
  let fixture: ComponentFixture<TestingAppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        MatImportsModule,
        EditorComponent,
        MonacoEditorModule.forRoot()
      ],
      declarations: [TestingAppComponent],
    })
      .compileComponents()
    fixture = TestBed.createComponent(TestingAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create component and data', () => {
    expect(component).toBeTruthy()
    const monacoEditorElement = fixture.debugElement.query(By.css('ngx-monaco-editor')).nativeElement as HTMLElement
    expect(monacoEditorElement?.textContent?.trim()).toBe('MY CODE')
    expect(component.editor.model.value).toBe('MY CODE')
  })

})
