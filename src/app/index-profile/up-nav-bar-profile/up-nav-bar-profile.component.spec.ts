import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpNavBarProfileComponent } from './up-nav-bar-profile.component';

describe('UpNavBarProfileComponent', () => {
  let component: UpNavBarProfileComponent;
  let fixture: ComponentFixture<UpNavBarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpNavBarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpNavBarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
