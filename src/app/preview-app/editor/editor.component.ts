import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MonacoEditorModule} from "ngx-monaco-editor-v2";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  @ViewChild('editorComponent', {static: true}) editorComponent!: ElementRef;
  @Input({required: true}) code!: string
  @Input({required: false}) language!: string
  editorOptions = {}


  constructor() {

  }

  ngOnInit() {
    this.editorOptions = {
      noSemanticValidation: true,
      noSyntaxValidation: true,
      theme: 'vs-dark',
      language: this.language ? this.language : 'html'
    }
  }

}
