import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoTiendaComponent } from './detalle-producto-tienda.component';

describe('DetalleProductoTiendaComponent', () => {
  let component: DetalleProductoTiendaComponent;
  let fixture: ComponentFixture<DetalleProductoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProductoTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
