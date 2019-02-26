import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlert2Component } from './my-alert2.component';

describe('MyAlert2Component', () => {
  let component: MyAlert2Component;
  let fixture: ComponentFixture<MyAlert2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlert2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
