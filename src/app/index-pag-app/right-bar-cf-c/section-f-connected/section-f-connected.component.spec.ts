import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFConnectedComponent } from './section-f-connected.component';

describe('SectionFConnectedComponent', () => {
  let component: SectionFConnectedComponent;
  let fixture: ComponentFixture<SectionFConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
