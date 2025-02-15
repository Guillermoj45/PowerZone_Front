import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MenuoriginalComponent} from './menuoriginal.component';

describe('MenuoriginalComponent', () => {
  let component: MenuoriginalComponent;
  let fixture: ComponentFixture<MenuoriginalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuoriginalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuoriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
