import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePedidoComponent } from './mensaje-pedido.component';

describe('MensajePedidoComponent', () => {
  let component: MensajePedidoComponent;
  let fixture: ComponentFixture<MensajePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajePedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
