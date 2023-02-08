import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTenantComponent } from './all-tenant.component';

describe('AllTenantComponent', () => {
  let component: AllTenantComponent;
  let fixture: ComponentFixture<AllTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
