import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MonacoEditorModule} from "ngx-monaco-editor-v2";

@Component({
  selector: 'app-history-app',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MonacoEditorModule
    ],
  templateUrl: './history-app.component.html',
  styleUrl: './history-app.component.scss'
})
export class HistoryAppComponent {

}
