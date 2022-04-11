import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPhotosComponent } from './left-photos.component';

describe('LeftPhotosComponent', () => {
  let component: LeftPhotosComponent;
  let fixture: ComponentFixture<LeftPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
