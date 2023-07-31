import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.scss'],
})
export class ExpEduComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    const experience1 =
      this.elementRef.nativeElement.querySelector('#experience1');
    const experience2 =
      this.elementRef.nativeElement.querySelector('#experience2');

    gsap.from(experience1, {
      x: '-100%',
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: experience1,
        start: 'top 95%',
        end: 'bottom 50%',
        scrub: 0.5,
      },
    });

    gsap.from(experience2, {
      x: '100%',
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: experience2,
        start: 'top 95%',
        end: 'bottom 50%',
        scrub: 0.5,
      },
    });
  }
}
