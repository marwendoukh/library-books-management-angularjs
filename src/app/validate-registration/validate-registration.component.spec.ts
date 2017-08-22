import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRegistrationComponent } from './validate-registration.component';

describe('ValidateRegistrationComponent', () => {
  let component: ValidateRegistrationComponent;
  let fixture: ComponentFixture<ValidateRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
