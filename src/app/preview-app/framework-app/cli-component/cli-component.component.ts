import { Component } from '@angular/core';

@Component({
  selector: 'app-cli-component',
  templateUrl: './cli-component.component.html',
  styleUrl: './cli-component.component.scss'
})
export class CliComponentComponent {
  code = '@Component({\n' +
    '  selector: \'app-framework-app\',\n' +
    '  templateUrl: \'./framework-app.component.html\',\n' +
    '  styleUrl: \'./framework-app.component.scss\'\n' +
    '})\n' +
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
