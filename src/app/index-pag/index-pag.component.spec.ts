import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPagComponent } from './index-pag.component';

describe('IndexPagComponent', () => {
  let component: IndexPagComponent;
  let fixture: ComponentFixture<IndexPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
