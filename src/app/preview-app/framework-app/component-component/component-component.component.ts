import { Component } from '@angular/core';

@Component({
  selector: 'app-component-component',
  templateUrl: './component-component.component.html',
  styleUrl: './component-component.component.scss'
})
export class ComponentComponentComponent {
  code = '@Component({\n' +
    '  selector: \'app-component-component\',\n' +
    '  styleUrl: \'./component-component.component.scss\',\n' +
    '  template: \'<mat-card>\\n\' +\n' +
    '    \'  <mat-card-content>\\n\' +\n' +
    '    \'    <h1> Component. </h1>\\n\' +\n' +
    '    \'    <div class="grid-container">\\n\' +\n' +
    '    \'      <div class="grid-item item1">\\n\' +\n' +
    '    \'        <span> Fundamental element of Angular! </span>\\n\' +\n' +
    '    \'        <ol>\\n\' +\n' +
    '    \'          <li><strong>Template:</strong></li>\\n\' +\n' +
    '    \'          <p>Represents the isolated view of the component, defining its DOM structure and bindings.</p>\\n\' +\n' +
    '    \'          <li><strong>Class:</strong></li>\\n\' +\n' +
    '    \'          <p>Represents the TypeScript class associated with the component. It facilitates the manipulation of the template, performs calculations, and reacts to lifecycle events through methods known as lifecycle hooks.</p>\\n\' +\n' +
    '    \'          <li><strong>Styles:</strong></li>\\n\' +\n' +
    '    \'          <p>Consist of CSS styles that are applied to the components template, providing visual decoration and layout.</p>\\n\' +\n' +
    '    \'          <li><strong>Test:</strong></li>\\n\' +\n' +
    '    \'          <p>Refers to the tools and methodologies used to test the behavior and functionality of the component, ensuring its correctness and reliability.</p>\\n\' +\n' +
    '    \'        </ol>\\n\' +\n' +
    '    \'        <br/>\\n\' +\n' +
    '    \'      </div>\\n\' +\n' +
    '    \'      <div class="grid-item item2">\\n\' +\n' +
    '    \'        <app-editor [code]="code"></app-editor>\\n\' +\n' +
    '    \'      </div>\\n\' +\n' +
    '    \'    </div>\\n\' +\n' +
    '    \'  </mat-card-content>\\n\' +\n' +
    '    \'</mat-card>\'\n' +
    '})' +
    'export class FrameworkAppComponent {\n' +
    '\n' +
    '  constructor() { }\n' +
    '\n' +
    '  ngOnInit(): void {\n' +
    '\n' +
    '  }\n' +
    '\n' +
    '}'
}
