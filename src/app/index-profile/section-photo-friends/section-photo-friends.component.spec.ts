import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPhotoFriendsComponent } from './section-photo-friends.component';

describe('SectionPhotoFriendsComponent', () => {
  let component: SectionPhotoFriendsComponent;
  let fixture: ComponentFixture<SectionPhotoFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPhotoFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPhotoFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
