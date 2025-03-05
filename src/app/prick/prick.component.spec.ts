import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrickComponent } from './prick.component';

describe('PrickComponent', () => {
  let component: PrickComponent;
  let fixture: ComponentFixture<PrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
