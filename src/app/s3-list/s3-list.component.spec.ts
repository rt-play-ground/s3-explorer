import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ListComponent } from './s3-list.component';

describe('S3ListComponent', () => {
  let component: S3ListComponent;
  let fixture: ComponentFixture<S3ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
