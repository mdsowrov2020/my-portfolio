import {
  Directive,
  HostBinding,
  HostListener,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appStickyHeader]',
})
export class StickyHeaderDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
