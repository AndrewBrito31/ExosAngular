import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3bankTransactionsComponent } from './ex3bank-transactions.component';

describe('Ex3bankTransactionsComponent', () => {
  let component: Ex3bankTransactionsComponent;
  let fixture: ComponentFixture<Ex3bankTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3bankTransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex3bankTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
