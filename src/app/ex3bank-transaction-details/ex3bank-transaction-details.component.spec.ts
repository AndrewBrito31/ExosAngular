import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3bankTransactionDetailsComponent } from './ex3bank-transaction-details.component';

describe('Ex3bankTransactionDetailsComponent', () => {
  let component: Ex3bankTransactionDetailsComponent;
  let fixture: ComponentFixture<Ex3bankTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3bankTransactionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex3bankTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
