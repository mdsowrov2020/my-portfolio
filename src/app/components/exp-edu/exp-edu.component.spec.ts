/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExpEduComponent } from './exp-edu.component';

describe('ExpEduComponent', () => {
  let component: ExpEduComponent;
  let fixture: ComponentFixture<ExpEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
