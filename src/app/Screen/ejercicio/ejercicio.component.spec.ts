import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EjercicioComponent } from './ejercicio.component';

describe('EjercicioComponent', () => {
  let component: EjercicioComponent;
  let fixture: ComponentFixture<EjercicioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EjercicioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
