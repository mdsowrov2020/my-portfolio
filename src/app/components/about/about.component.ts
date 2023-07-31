import { Component, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.rotateImageBasedOnScroll();
  }

  rotateImageBasedOnScroll(): void {
    const aboutImgElement =
      this.elementRef.nativeElement.querySelector('.about__img');
    const aboutImageElement =
      this.elementRef.nativeElement.querySelector('.about__img--image');
    const scrollPercent = this.getScrollPercent();
    const rotation = scrollPercent * 360;
    const imagerotation = scrollPercent * 360;

    gsap.to(aboutImgElement, {
      rotation: -rotation,
    });

    gsap.to(aboutImageElement, {
      rotation: imagerotation,
    });
  }

  getScrollPercent(): number {
    const scrollOffset = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    return scrollOffset / totalHeight;
  }
}
