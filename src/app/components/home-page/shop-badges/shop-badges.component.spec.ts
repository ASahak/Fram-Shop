import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBadgesComponent } from './shop-badges.component';

describe('ShopBadgesComponent', () => {
  let component: ShopBadgesComponent;
  let fixture: ComponentFixture<ShopBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
