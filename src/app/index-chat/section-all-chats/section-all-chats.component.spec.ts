import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAllChatsComponent } from './section-all-chats.component';

describe('SectionAllChatsComponent', () => {
  let component: SectionAllChatsComponent;
  let fixture: ComponentFixture<SectionAllChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAllChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAllChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
