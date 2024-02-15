import { Component } from '@angular/core';

@Component({
  selector: 'app-component-component',
  templateUrl: './component-component.component.html',
  styleUrl: './component-component.component.scss'
})
export class ComponentComponentComponent {
  code = '@Component({\n' +
    '  selector: app-component-component,\n' +
    '  styleUrl: ./component-component.component.scss,\n' +
    '  template: <mat-card> \n' +
    '      <mat-card-content> \n' +
    '        <h1> Component. </h1> \n' +
    '        <div class="grid-container"> \n' +
    '          <div class="grid-item item1"> \n' +
    '            <span> Fundamental element of Angular! </span> \n' +
    '            <ol> \n' +
    '              <li><strong>Template:</strong></li> \n' +
    '              <p>Represents the isolated view of the component, defining its DOM structure and bindings.</p> \n' +
    '              <li><strong>Class:</strong></li> \n' +
    '              <p>Represents the TypeScript class associated with the component. It facilitates the manipulation of the template, performs calculations, and reacts to lifecycle events through methods known as lifecycle hooks.</p> \n' +
    '              <li><strong>Styles:</strong></li> \n' +
    '              <p>Consist of CSS styles that are applied to the components template, providing visual decoration and layout.</p> \n' +
    '              <li><strong>Test:</strong></li> \n' +
    '              <p>Refers to the tools and methodologies used to test the behavior and functionality of the component, ensuring its correctness and reliability.</p> \n' +
    '            </ol> \n' +
    '            <br/> \n' +
    '          </div> \n' +
    '          <div class="grid-item item2"> \n' +
    '            <app-editor [code]="code"></app-editor> \n' +
    '          </div> \n' +
    '        </div> \n' +
    '      </mat-card-content> \n' +
    '    </mat-card>\n' +
    '}) \n' +
    'export class FrameworkAppComponent {\n' +
    '\n code="code-that-you-see-in-editor" \n ' +
    'constructor() { }\n' +
    '\n' +
    '  ngOnInit(): void {\n' +
    '\n' +
    '  }\n' +
    '\n' +
    '}'
}
