import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCategoryOverviewComponent } from './filter-category-overview.component';

describe('FilterCategoryOverviewComponent', () => {
  let component: FilterCategoryOverviewComponent;
  let fixture: ComponentFixture<FilterCategoryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCategoryOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCategoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
