import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input, ContentChild,

} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #bindPara>{{bind}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bind = 1000;

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  constructor() { }

  ngOnChanges() { this.log("OnChange"); }

  ngOnInit() { this.log("OnInit"); }

  ngDoCheck() { this.log("DoCheck"); }

  ngAfterContentInit() { this.log("AfterContentInit"); console.log(this.boundContent); }

  ngAfterContentChecked() { this.log("AfterContentChecked"); console.log(this.boundContent);  }

  ngAfterViewInit() { this.log("AfterViewInit"); }

  ngAfterViewChecked() { this.log("AfterViewChecked"); }

  ngOnDestroy() { this.log("OnDestroy"); }

  private log(hook : string){
    console.log(hook);
  }

}
