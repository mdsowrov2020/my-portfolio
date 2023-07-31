import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.animateWelcome();
  }

  animateWelcome(): void {
    gsap.fromTo(
      '.welcome-text',
      { y: '0%', opacity: 1 },
      { y: '-100%', opacity: 0, duration: 0.75, delay: 1 }
    );
  }
}
