import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBarCFCComponent } from './right-bar-cf-c.component';

describe('RightBarCFCComponent', () => {
  let component: RightBarCFCComponent;
  let fixture: ComponentFixture<RightBarCFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBarCFCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBarCFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
