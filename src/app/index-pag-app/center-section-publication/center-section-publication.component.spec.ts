import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSectionPublicationComponent } from './center-section-publication.component';

describe('CenterSectionPublicationComponent', () => {
  let component: CenterSectionPublicationComponent;
  let fixture: ComponentFixture<CenterSectionPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterSectionPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSectionPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
