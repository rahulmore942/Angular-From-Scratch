import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToddMotoComponent } from './todd-moto.component';

describe('ToddMotoComponent', () => {
  let component: ToddMotoComponent;
  let fixture: ComponentFixture<ToddMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToddMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToddMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
