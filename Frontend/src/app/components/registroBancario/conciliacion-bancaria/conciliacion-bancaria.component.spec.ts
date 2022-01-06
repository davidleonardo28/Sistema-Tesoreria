import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConciliacionBancariaComponent } from './conciliacion-bancaria.component';

describe('ConciliacionBancariaComponent', () => {
  let component: ConciliacionBancariaComponent;
  let fixture: ComponentFixture<ConciliacionBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciliacionBancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
