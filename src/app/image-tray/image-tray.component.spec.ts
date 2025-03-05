import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTrayComponent } from './image-tray.component';

describe('ImageTrayComponent', () => {
  let component: ImageTrayComponent;
  let fixture: ComponentFixture<ImageTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
