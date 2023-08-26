import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalculatorComponent } from './imc-calculator.component';

describe('ImcCalculatorComponent', () => {
  let component: ImcCalculatorComponent;
  let fixture: ComponentFixture<ImcCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcCalculatorComponent]
    });
    fixture = TestBed.createComponent(ImcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
