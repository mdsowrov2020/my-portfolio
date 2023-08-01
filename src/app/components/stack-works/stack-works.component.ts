import { Component, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Create a custom interface to represent the animation target
export interface CardElement extends Element {
  style: {
    transform: string;
    visibility?: string;
    opacity?: number;
  };
}

@Component({
  selector: 'app-stack-works',
  templateUrl: './stack-works.component.html',
  styleUrls: ['./stack-works.component.scss'],
})
export class StackWorksComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Initialize ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const containerElement =
      this.elementRef.nativeElement.querySelector('.work-container');
    // Get an array of all the cards
    const cards = gsap.utils.toArray<CardElement>('.work-container__work');
    let activePins = 0;
    // Loop through each card and apply the animation
    cards.forEach((card, index) => {
      const cardElement = card as Element;
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          // markers: true,
          invalidateOnRefresh: true,
        },
        ease: 'none',
        // autoAlpha: 1 - (cards.length - index) * 0.025,
        scale: () => 1 - (cards.length - index) * 0.025,
        onComplete: () => {
          // Check if it's the last card and scroll the section to the top
          if (index === cards.length - 1) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: 0 },
              ease: 'power2.out',
            });
          }
        },
      });

      if (card) {
        ScrollTrigger.create({
          trigger: card,
          // start: 'top center',
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: 'pin',
          end: 'max',
          invalidateOnRefresh: true,
          start: 'top 100px',
        });
      }
    });
  }
}
