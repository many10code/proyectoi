import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarProveedorPage } from './editar-proveedor.page';

describe('EditarProveedorPage', () => {
  let component: EditarProveedorPage;
  let fixture: ComponentFixture<EditarProveedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
