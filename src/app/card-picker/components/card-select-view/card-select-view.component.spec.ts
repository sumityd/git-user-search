import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectViewComponent } from './card-select-view.component';

describe('CardSelectViewComponent', () => {
  let component: CardSelectViewComponent;
  let fixture: ComponentFixture<CardSelectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSelectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
