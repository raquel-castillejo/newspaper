import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaAbrilEspanaComponent } from './temperatura-abril-espana.component';


describe('TemperaturaAbrilEspanaComponent', () => {
  let component: TemperaturaAbrilEspanaComponent;
  let fixture: ComponentFixture<TemperaturaAbrilEspanaComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaAbrilEspanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturaAbrilEspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});