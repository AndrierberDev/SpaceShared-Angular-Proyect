import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInfoPhotoProfileComponent } from './section-info-photo-profile.component';

describe('SectionInfoPhotoProfileComponent', () => {
  let component: SectionInfoPhotoProfileComponent;
  let fixture: ComponentFixture<SectionInfoPhotoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInfoPhotoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInfoPhotoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
