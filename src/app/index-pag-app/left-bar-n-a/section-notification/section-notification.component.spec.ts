import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNotificationComponent } from './section-notification.component';

describe('SectionNotificationComponent', () => {
  let component: SectionNotificationComponent;
  let fixture: ComponentFixture<SectionNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
