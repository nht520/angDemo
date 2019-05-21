import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotdlistComponent } from './totdlist.component';

describe('TotdlistComponent', () => {
  let component: TotdlistComponent;
  let fixture: ComponentFixture<TotdlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotdlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
