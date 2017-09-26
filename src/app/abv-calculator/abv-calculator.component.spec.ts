import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbvCalculatorComponent } from './abv-calculator.component';

describe('AbvCalculatorComponent', () => {
  let component: AbvCalculatorComponent;
  let fixture: ComponentFixture<AbvCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbvCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbvCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
