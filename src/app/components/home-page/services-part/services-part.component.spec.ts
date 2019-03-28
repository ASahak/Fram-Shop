import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPartComponent } from './services-part.component';

describe('ServicesPartComponent', () => {
  let component: ServicesPartComponent;
  let fixture: ComponentFixture<ServicesPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
