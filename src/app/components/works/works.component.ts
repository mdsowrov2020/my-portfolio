import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.animateSection();
  }
  ngAfterViewInit(): void {
    this.initScrollTriggerAnimation();
  }

  initScrollTriggerAnimation(): void {
    const workCards =
      this.elementRef.nativeElement.querySelectorAll('.work-card');

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workCards,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.staggerFrom(
      workCards,
      1,
      { opacity: 0, y: 50 },
      0.5 // Stagger delay of 0.2 seconds between each element
    );
  }

  animateSection() {
    // GSAP ScrollTrigger animation for the border-radius
    gsap.registerPlugin(ScrollTrigger);

    const footerElement =
      this.elementRef.nativeElement.querySelector('.work-section');

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
  }
}
