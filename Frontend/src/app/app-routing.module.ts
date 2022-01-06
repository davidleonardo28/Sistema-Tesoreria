import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/pages/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./components/auth/registro/registro.module').then(
        (m) => m.RegistroModule
      ),
  },

  { path: 'gasto', loadChildren: () => import('./components/auth/gasto/gasto.module').then(m => m.GastoModule) },
  { path: 'ingreso', loadChildren: () => import('./components/auth/ingreso/ingreso.module').then(m => m.IngresoModule) },
  //acaNOOOOOO
  { path: 'conciliacionBancaria', loadChildren: () =>
      import('./components/GestionBancaria/conciliacion-bancaria/conciliacion-bancaria.module').then
        (m => m.ConciliacionBancariaModule
        )
  },
  { path: 'listaConciliacion', loadChildren: () =>
   import('./components/registroBancario/lista-conciliacion/lista-conciliacion.module').then
   (m => m.ListaConciliacionModule) },

  { path: 'cuentasBancariasDOS', loadChildren: () =>
   import('./components/registroBancario/cuentas-bancarias-dos/cuentas-bancarias-dos.module').then
   (m => m.CuentasBancariasDOSModule) },

  {
    path: 'ConciliacionBancaria',
    loadChildren: () =>
      import(
        './components/registroBancario/conciliacion-bancaria/conciliacion-bancaria.module'
      ).then((m) => m.ConciliacionBancariaModule),
  },
  {
    path: 'AgregarCuenta',
    loadChildren: () =>
      import(
        './components/registroBancario/agregar-cuenta/agregar-cuenta.module'
      ).then((m) => m.AgregarCuentaModule),
  },

  {
    path: 'verUsuario',
    loadChildren: () =>
      import(
        './components/admin/ver-usuarios/ver-usuario.module'
      ).then((m) => m.VerUsuarioModule),
  },
  { path: 'verMovimientos',
    loadChildren: () =>
      import(
        './components/admin/ver-movimientos/ver-movimientos.module'
        ).then(m => m.VerMovimientosModule) },
  { path: 'grafico1', loadChildren: () => import('./components/grafico/grafico1/grafico1.module').then(m => m.Grafico1Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
