// sidebar.component.ts

import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { SidebarService } from 'src/app/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen = false; // Add this property to track the state of the sidebar

  constructor(private sidebarService: SidebarService) {
    // Subscribe to the sidebarToggle$ subject to trigger the animation
    this.sidebarService.sidebarToggle$.subscribe((isOpen: boolean) =>
      this.toggleSidebar(isOpen)
    );
  }

  toggleSidebar(isOpen: boolean) {
    const sidebarElement = document.querySelector('.sidebar');
    const contentElement = document.querySelector('.content');
    const backdropElement = document.querySelector('.backdrop');

    const timeline = gsap.timeline({
      onComplete: () => {
        if (!isOpen) {
          gsap.set([sidebarElement, backdropElement], {
            display: 'none',
            opacity: 0,
          });
        }
      },
    });

    if (isOpen) {
      gsap.set([sidebarElement, backdropElement], { display: 'block' });
      timeline
        .to([sidebarElement, backdropElement], {
          opacity: 1,
          duration: 0.2,
        })
        .to(sidebarElement, {
          translateX: 0,
          duration: 0.4,
          ease: 'power3.inOut',
        })
        .from(
          contentElement,
          {
            opacity: 0,
            duration: 0.4,
          },
          '-=0.4'
        );
    } else {
      timeline
        .to([sidebarElement, backdropElement], {
          opacity: 0,
          duration: 0.2,
        })
        .to(
          sidebarElement,
          {
            translateX: '100%',
            duration: 0.4,
            ease: 'power3.inOut',
          },
          '-=0.4'
        )
        .to(
          contentElement,
          {
            opacity: 1, // Show the content when the sidebar is closed
            duration: 0.1,
          },
          '-=0.1'
        );
    }

    this.isOpen = isOpen;
  }
}
