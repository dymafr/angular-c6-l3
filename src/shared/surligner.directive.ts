import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[monSurlignage]' })
export class SurlignerDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.surligner('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.surligner(null);
  }

  private surligner(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
