
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click ME!!</button>
  `,
  styles: [],
})
export class EventBindingComponent {

  @Output() clicked = new EventEmitter<string>();

  onClicked(){ this.clicked.emit("Event WORKS!!!"); }

}
