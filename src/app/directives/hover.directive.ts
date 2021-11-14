import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {

  @Input('appHover') color = ''
  constructor(private elRef: ElementRef) {}

  @HostListener('mouseenter') mouseenter() {
    this.elRef.nativeElement.style.backgroundColor = this.color;
  }
}
