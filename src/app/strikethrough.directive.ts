// manipulate DOM
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){ // single click line appears
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){ // db click line disappers
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
