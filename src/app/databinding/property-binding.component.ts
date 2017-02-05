import { Component, Input } from '@angular/core';

@Component({
  selector: 'fac-property-binding',
  template: `
    {{result}}
  `,

})
export class PropertyBindingComponent {
   @Input() result: number = 0;
}
