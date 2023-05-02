import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionClimaticaSinPedirPerdonComponent } from './accion-climatica-sin-pedir-perdon.component';

describe('AccionClimaticaSinPedirPerdonComponent', () => {
  let component: AccionClimaticaSinPedirPerdonComponent;
  let fixture: ComponentFixture<AccionClimaticaSinPedirPerdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionClimaticaSinPedirPerdonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionClimaticaSinPedirPerdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
