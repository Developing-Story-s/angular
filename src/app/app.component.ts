import { Component } from '@angular/core';

import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root Component</h1>
      <fa-lifecycle *ngIf="!delete" [bind]="bindVal">
        <p #boundContent>{{test}}</p>
      </fa-lifecycle>
      <button (click)="delete = true">Delete here</button>
      <button (click)="test = 'Changed Value'">Change Content</button>
      <button (click)="bindVal = 2000">Change Value</button>
  `
})
export class AppComponent {
  delete = false;
  test = 'starting value';
  bindVal = 1000;
}
