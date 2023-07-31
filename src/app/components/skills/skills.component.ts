import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  private skillCards: HTMLElement[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.skillCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.skill')
    );
    this.setupScrollTrigger();
  }

  private setupScrollTrigger() {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const totalCards = this.skillCards.length;
    const spreadDistance = 100; // Adjust the spread distance as per your preference.

    this.skillCards.forEach((card: HTMLElement, index: number) => {
      gsap.from(card, {
        y: (index - Math.floor(totalCards / 2)) * spreadDistance,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill-section', // Use the .skill-section as the trigger
          start: 'top 50%', // Adjust the start point for the animation.
          end: 'bottom 80%', // Adjust the end point for the animation.
          toggleActions: 'play none none reset',
        },
      });
    });
  }
}
