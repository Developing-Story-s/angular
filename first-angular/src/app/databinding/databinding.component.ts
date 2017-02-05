import { Component } from '@angular/core';

import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = 'This is a string interpolation';
  numberInterpolation = '2';

  onTest(){ return true; }

  onClicked(value: string){ alert(value); }
}
