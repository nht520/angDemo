import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtwelcomeComponent } from './abtwelcome.component';

describe('AbtwelcomeComponent', () => {
  let component: AbtwelcomeComponent;
  let fixture: ComponentFixture<AbtwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
