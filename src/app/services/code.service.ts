/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Injectable, Inject } from '@angular/core';
import * as monaco from "monaco-editor";

@Injectable({ providedIn: 'root' })
export class CodeService {

  editorInstance:any;
  code:string = '';

  constructor() {}

  apply(code:string) {
    this.code = code;
    this.formatCode();
  }

  setEditor(editorInstance:any) {
    this.editorInstance = editorInstance;
  }

  private formatCode() {
    // Get the Monaco Editor instance
    // this.editorInstance!.getAction('editor.action.formatDocument')!.run();
  }
}


