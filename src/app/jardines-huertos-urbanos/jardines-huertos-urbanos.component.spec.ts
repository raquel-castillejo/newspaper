import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinesHuertosUrbanosComponent } from './jardines-huertos-urbanos.component';

describe('JardinesHuertosUrbanosComponent', () => {
  let component: JardinesHuertosUrbanosComponent;
  let fixture: ComponentFixture<JardinesHuertosUrbanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardinesHuertosUrbanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JardinesHuertosUrbanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
