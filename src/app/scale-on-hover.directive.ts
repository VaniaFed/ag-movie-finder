import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scaleOnHover]'
})
export class ScaleOnHoverDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.classList.add('transform-scale');
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.classList.remove('transform-scale');
  }
}
