import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpNavBarChatComponent } from './up-nav-bar-chat.component';

describe('UpNavBarChatComponent', () => {
  let component: UpNavBarChatComponent;
  let fixture: ComponentFixture<UpNavBarChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpNavBarChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpNavBarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
