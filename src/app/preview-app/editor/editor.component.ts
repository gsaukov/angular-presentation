import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MonacoEditorModule} from "ngx-monaco-editor-v2";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements AfterViewInit{
  @ViewChild(ElementRef, { static: true }) editorComponent!: ElementRef;
  editorOptions = {theme: 'vs-dark', language: 'html'}
  @Input({ required: true }) code!: string

  constructor() {

  }

  onInit(editor:any): void {
    editor!.getAction('editor.action.formatDocument')!.run();
  }

  formatCode() {
    // this.editorInstance!.getAction('editor.action.formatDocument')!.run();
  }

  ngAfterViewInit(): void {
  }

}
