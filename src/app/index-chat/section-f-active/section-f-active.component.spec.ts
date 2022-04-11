import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFActiveComponent } from './section-f-active.component';

describe('SectionFActiveComponent', () => {
  let component: SectionFActiveComponent;
  let fixture: ComponentFixture<SectionFActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
