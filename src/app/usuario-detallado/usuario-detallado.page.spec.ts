import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioDetalladoPage } from './usuario-detallado.page';

describe('UsuarioDetalladoPage', () => {
  let component: UsuarioDetalladoPage;
  let fixture: ComponentFixture<UsuarioDetalladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
