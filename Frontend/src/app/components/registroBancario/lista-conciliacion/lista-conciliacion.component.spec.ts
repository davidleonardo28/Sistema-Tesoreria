import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConciliacionComponent } from './lista-conciliacion.component';

describe('ListaConciliacionComponent', () => {
  let component: ListaConciliacionComponent;
  let fixture: ComponentFixture<ListaConciliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConciliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
