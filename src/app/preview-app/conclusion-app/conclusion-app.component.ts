import { Component } from '@angular/core';
import {MutationObserverService} from "../../services/mutation-observer.service";

@Component({
  selector: 'app-conclusion-app',
  templateUrl: './conclusion-app.component.html',
  styleUrl: './conclusion-app.component.scss'
})
export class ConclusionAppComponent {

  constructor(public mutationObserver: MutationObserverService) {
  }
}
