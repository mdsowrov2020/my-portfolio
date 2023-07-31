// sidebar.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarToggleSubject = new Subject<boolean>();
  sidebarToggle$ = this.sidebarToggleSubject.asObservable();

  toggleSidebar(isOpen: boolean) {
    this.sidebarToggleSubject.next(isOpen);
  }
}
