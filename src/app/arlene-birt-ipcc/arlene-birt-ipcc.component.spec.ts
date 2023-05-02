import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArleneBirtIpccComponent } from './arlene-birt-ipcc.component';

describe('ArleneBirtIpccComponent', () => {
  let component: ArleneBirtIpccComponent;
  let fixture: ComponentFixture<ArleneBirtIpccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArleneBirtIpccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArleneBirtIpccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
