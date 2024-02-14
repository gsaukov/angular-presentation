import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'introduction-app',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit{

  code:any
  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.code = document.documentElement.innerHTML
    });
  }

}

