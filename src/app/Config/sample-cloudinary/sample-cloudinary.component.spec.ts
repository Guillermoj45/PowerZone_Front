import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SampleCloudinaryComponent} from './sample-cloudinary.component';

describe('SampleCloudinaryComponent', () => {
  let component: SampleCloudinaryComponent;
  let fixture: ComponentFixture<SampleCloudinaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SampleCloudinaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleCloudinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
