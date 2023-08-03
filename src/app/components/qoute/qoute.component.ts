import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.scss'],
})
export class QouteComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
}
