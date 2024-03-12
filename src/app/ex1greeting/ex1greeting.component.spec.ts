import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1greetingComponent } from './ex1greeting.component';

describe('Ex1greetingComponent', () => {
  let component: Ex1greetingComponent;
  let fixture: ComponentFixture<Ex1greetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1greetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex1greetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
