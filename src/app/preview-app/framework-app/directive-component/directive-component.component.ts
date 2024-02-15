import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrl: './directive-component.component.scss'
})
export class DirectiveComponentComponent {

  component = '\n <!--COMPONENT--> \n <app-editor [code]="code"></app-editor> \n\n '
  attribute = '\n <!--ATTRIBUTE--> \n <p [appHighlight]="color">Highlight me!</p> \n\n'
  structural = '\n <!--STRUCTURAL--> \n <div *ngIf="isLoggedIn">\n' +
    '  <p>Welcome, {{ username }}!</p>\n' +
    '</div>\n' +
    '\n' +
    '<ul>\n' +
    '  <li *ngFor="let item of items">{{ item }}</li>\n' +
    '</ul>'

  code = this.component + this.attribute + this.structural

}
