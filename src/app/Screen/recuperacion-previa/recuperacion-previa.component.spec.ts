import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RecuperacionPreviaComponent} from './recuperacion-previa.component';

describe('RecuperacionPreviaComponent', () => {
  let component: RecuperacionPreviaComponent;
  let fixture: ComponentFixture<RecuperacionPreviaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RecuperacionPreviaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacionPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
