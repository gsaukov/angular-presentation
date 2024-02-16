import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.scss'
})
export class PipeComponentComponent {

  date = new Date()

  raw = '\n <!--RAW--> \n <span>Raw: {{date}}</span> \n\n '
  piped = '\n <!--PIPED--> \n <span>Piped: {{date | date:\'dd.MM.yyyy\'}}</span> \n\n'

  code = this.raw + this.piped

}
