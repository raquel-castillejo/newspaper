import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoEconomiaCircularComponent } from './camino-economia-circular.component';

describe('CaminoEconomiaCircularComponent', () => {
  let component: CaminoEconomiaCircularComponent;
  let fixture: ComponentFixture<CaminoEconomiaCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminoEconomiaCircularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminoEconomiaCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
