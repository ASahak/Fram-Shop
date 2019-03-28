import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSortComponent } from './top-sort.component';

describe('TopSortComponent', () => {
  let component: TopSortComponent;
  let fixture: ComponentFixture<TopSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
