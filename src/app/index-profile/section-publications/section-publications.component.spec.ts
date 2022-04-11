import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPublicationsComponent } from './section-publications.component';

describe('SectionPublicationsComponent', () => {
  let component: SectionPublicationsComponent;
  let fixture: ComponentFixture<SectionPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
