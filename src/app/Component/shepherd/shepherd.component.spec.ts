import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShepherdComponent } from './shepherd.component';

describe('ShepherdComponent', () => {
  let component: ShepherdComponent;
  let fixture: ComponentFixture<ShepherdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShepherdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShepherdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
