import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'introduction-app',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ProjectGenerationTaskAppComponent')
  }

}
