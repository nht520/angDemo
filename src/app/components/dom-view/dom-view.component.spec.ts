import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomViewComponent } from './dom-view.component';

describe('DomViewComponent', () => {
  let component: DomViewComponent;
  let fixture: ComponentFixture<DomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
