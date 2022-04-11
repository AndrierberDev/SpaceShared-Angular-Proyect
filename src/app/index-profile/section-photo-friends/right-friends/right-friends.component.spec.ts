import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFriendsComponent } from './right-friends.component';

describe('RightFriendsComponent', () => {
  let component: RightFriendsComponent;
  let fixture: ComponentFixture<RightFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
