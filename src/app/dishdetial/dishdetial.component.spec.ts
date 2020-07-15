import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishdetialComponent } from './dishdetial.component';

describe('DishdetialComponent', () => {
  let component: DishdetialComponent;
  let fixture: ComponentFixture<DishdetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishdetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
