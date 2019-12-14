import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadInfoComponent } from './head-info.component';

describe('HeadInfoComponent', () => {
  let component: HeadInfoComponent;
  let fixture: ComponentFixture<HeadInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
