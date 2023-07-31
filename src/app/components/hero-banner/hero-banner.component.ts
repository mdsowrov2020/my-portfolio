import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const nameElements =
      this.elementRef.nativeElement.querySelectorAll('.name h2');
    const tl = gsap.timeline();

    tl.from(nameElements, {
      duration: 3,
      // duration: 3.8,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 2,
      stagger: {
        amount: 0.3,
      },
    });
  }
}
