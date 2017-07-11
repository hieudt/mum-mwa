import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `
})
export class MyCompComponent {
  @Input()
  data: string[] = [];
}
