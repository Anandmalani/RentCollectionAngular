import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameerComponent } from './sameer.component';

describe('SameerComponent', () => {
  let component: SameerComponent;
  let fixture: ComponentFixture<SameerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
