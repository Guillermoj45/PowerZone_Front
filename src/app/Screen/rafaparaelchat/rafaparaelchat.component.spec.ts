import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RafaparaelchatComponent} from './rafaparaelchat.component';

describe('RafaparaelchatComponent', () => {
  let component: RafaparaelchatComponent;
  let fixture: ComponentFixture<RafaparaelchatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RafaparaelchatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RafaparaelchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
