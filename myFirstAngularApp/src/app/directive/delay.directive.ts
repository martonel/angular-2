import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay } from 'rxjs';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>
  ) { }

  @Input() set appDelay(time: number | undefined){
    let delayTimeout = setTimeout(() =>{
      clearTimeout(delayTimeout);
      this.vc.createEmbeddedView(this.tr);

    },time);
  }

}
