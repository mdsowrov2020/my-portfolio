import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear!: number;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // GSAP ScrollTrigger animation for the border-radius
    gsap.registerPlugin(ScrollTrigger);

    const footerElement =
      this.elementRef.nativeElement.querySelector('.footer');

    gsap.to(footerElement, {
      borderRadius: '0%', // Change border-radius to 0% when reaching the bottom
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerElement,
        start: 'top bottom', // Trigger the animation when the footer top reaches the viewport bottom
        end: 'bottom bottom', // And end when the footer bottom reaches the viewport bottom
        scrub: true,
      },
    });

    this.currentYear = new Date().getFullYear();
  }
}
