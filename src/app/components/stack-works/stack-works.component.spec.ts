/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StackWorksComponent } from './stack-works.component';

describe('StackWorksComponent', () => {
  let component: StackWorksComponent;
  let fixture: ComponentFixture<StackWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
