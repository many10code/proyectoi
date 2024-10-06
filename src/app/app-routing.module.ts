import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalle-venta',
    loadChildren: () => import('./detalle-venta/detalle-venta.module').then( m => m.DetalleVentaPageModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./detalle-usuario/detalle-usuario.module').then( m => m.DetalleUsuarioPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'editar-venta',
    loadChildren: () => import('./editar-venta/editar-venta.module').then( m => m.EditarVentaPageModule)
  },
  {
    path: 'usuario-detallado',
    loadChildren: () => import('./usuario-detallado/usuario-detallado.module').then( m => m.UsuarioDetalladoPageModule)
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'detalle-proveedor',
    loadChildren: () => import('./detalle-proveedor/detalle-proveedor.module').then( m => m.DetalleProveedorPageModule)
  },
  {
    path: 'editar-proveedor',
    loadChildren: () => import('./editar-proveedor/editar-proveedor.module').then( m => m.EditarProveedorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
