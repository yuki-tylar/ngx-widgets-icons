import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[iconHost]'
})
export class IconHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
