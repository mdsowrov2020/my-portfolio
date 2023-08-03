import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements OnInit, AfterViewInit {
  @Input() title: string = '';
  uniqueId!: string;
  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {
    this.uniqueId = `sectionTitle_${Math.random().toString(36).substr(2, 9)}`;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimation();

    // Manually trigger change detection
    this.cdRef.detectChanges();
  }

  initAnimation(): void {
    const slider = this.elementRef.nativeElement.querySelector('.slider');

    gsap.to(slider, {
      width: '100%',
      duration: 2, // Set the duration of the width expansion
      ease: 'power2.out', // Set the easing
      scrollTrigger: {
        trigger: `#${this.uniqueId}`, // Use the unique ID as the trigger
        start: 'top 50%',
        end: 'top 20%',
        toggleActions: 'play none none reverse', // Plays animation when entering and reverses when leaving
      },
      onComplete: () => {
        gsap.to(slider, {
          x: '100%',
          duration: 3,
          ease: 'power2.inOut',
        });
      },
    });
  }
}
