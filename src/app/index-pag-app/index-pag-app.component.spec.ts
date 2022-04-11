import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPagAppComponent } from './index-pag-app.component';

describe('IndexPagAppComponent', () => {
  let component: IndexPagAppComponent;
  let fixture: ComponentFixture<IndexPagAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPagAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPagAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
