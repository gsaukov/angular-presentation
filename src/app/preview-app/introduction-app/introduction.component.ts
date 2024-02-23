import { AfterViewInit, Component } from '@angular/core'
import { html_beautify } from 'js-beautify'

@Component({
  selector: 'introduction-app',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit {

  code:any
  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.code = html_beautify(document.documentElement.innerHTML)
    })
  }

}

