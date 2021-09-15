// sample.component.ts
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-sample',
  template: `
  <div style="border: blue solid 1px">
    <p>Data from Parent: {{dataFromParent}}</p>
    <input [(ngModel)]="input" [value]="input" (keydown.enter)="send()">
  </div>
  `,
  styles: []
})
export class SampleComponent {
  @Input() dataFromParent: string;
  @Output() emitDataToParent = new EventEmitter<string>();
  input: string;
  constructor() { }

  send() {
    this.emitDataToParent.emit(this.input)
    this.input = '';
  }
}