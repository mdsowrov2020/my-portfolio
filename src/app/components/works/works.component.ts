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
  ngOnInit(): void {}
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
}
