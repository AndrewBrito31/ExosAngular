import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2calculatorComponent } from './ex2calculator.component';

describe('Ex2calculatorComponent', () => {
  let component: Ex2calculatorComponent;
  let fixture: ComponentFixture<Ex2calculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex2calculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex2calculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
