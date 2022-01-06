import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasBancariasDOSComponent } from './cuentas-bancarias-dos.component';

describe('CuentasBancariasDOSComponent', () => {
  let component: CuentasBancariasDOSComponent;
  let fixture: ComponentFixture<CuentasBancariasDOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasBancariasDOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasBancariasDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
