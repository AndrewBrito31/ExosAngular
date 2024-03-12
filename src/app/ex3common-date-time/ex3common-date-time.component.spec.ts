import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3commonDateTimeComponent } from './ex3common-date-time.component';

describe('Ex3commonDateTimeComponent', () => {
  let component: Ex3commonDateTimeComponent;
  let fixture: ComponentFixture<Ex3commonDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3commonDateTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex3commonDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
