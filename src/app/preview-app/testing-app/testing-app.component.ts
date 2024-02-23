import {Component, ViewChild} from '@angular/core'
import {EditorComponent} from "ngx-monaco-editor-v2"

@Component({
  selector: 'app-testing-app',
  templateUrl: './testing-app.component.html',
  styleUrl: './testing-app.component.scss'
})
export class TestingAppComponent {
  @ViewChild('editor', { static: true }) editor!: EditorComponent
  code=
    'describe(\'TestingAppComponent\', () => {\n' +
    '  let component: TestingAppComponent;\n' +
    '  let fixture: ComponentFixture<TestingAppComponent>;\n' +
    '\n' +
    '  beforeEach(async () => {\n' +
    '    await TestBed.configureTestingModule({\n' +
    '      imports: [BrowserModule,\n' +
    '        HttpClientModule,\n' +
    '        FormsModule,\n' +
    '        MatImportsModule,\n' +
    '        EditorComponent,\n' +
    '        MonacoEditorModule.forRoot()\n' +
    '      ],\n' +
    '      declarations: [TestingAppComponent],\n' +
    '    })\n' +
    '      .compileComponents();\n' +
    '    fixture = TestBed.createComponent(TestingAppComponent);\n' +
    '    component = fixture.componentInstance;\n' +
    '    fixture.detectChanges();\n' +
    '  });\n' +
    '\n' +
    '  it(\'should create component and data\', () => {\n' +
    '    expect(component).toBeTruthy();\n' +
    '    const monacoEditorElement = fixture.debugElement.query(By.css(\'ngx-monaco-editor\')).nativeElement as HTMLElement;\n' +
    '    expect(monacoEditorElement?.textContent?.trim()).toBe(\'MY CODE\');\n' +
    '    expect(component.editor.model.value).toBe(\'MY CODE\');\n' +
    '  });\n' +
    '\n' +
    '});\n'

}
