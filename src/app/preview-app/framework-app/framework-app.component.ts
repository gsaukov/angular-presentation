import { Component } from '@angular/core';
import {
  CarouselComponent, CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import {AppModule} from "../../app.module";

@Component({
  selector: 'app-framework-app',
  templateUrl: './framework-app.component.html',
  styleUrl: './framework-app.component.scss'
})
export class FrameworkAppComponent {

  constructor() { }

  ngOnInit(): void {

  }

}
