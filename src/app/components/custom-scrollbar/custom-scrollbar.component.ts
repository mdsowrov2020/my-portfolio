import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-scrollbar',
  templateUrl: './custom-scrollbar.component.html',
  styleUrls: ['./custom-scrollbar.component.scss'],
})
export class CustomScrollbarComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = event.target.documentElement.scrollTop;
    const scrollHeight = event.target.documentElement.scrollHeight;
    const clientHeight = event.target.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  }
}
