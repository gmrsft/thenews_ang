import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiconsumComponent } from './apiconsum.component';

describe('ApiconsumComponent', () => {
  let component: ApiconsumComponent;
  let fixture: ComponentFixture<ApiconsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiconsumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiconsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
