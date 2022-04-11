import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarNAComponent } from './left-bar-n-a.component';

describe('LeftBarNAComponent', () => {
  let component: LeftBarNAComponent;
  let fixture: ComponentFixture<LeftBarNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBarNAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
