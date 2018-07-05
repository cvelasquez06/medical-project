import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoComponent} from './producto/listado/listado.component';
import {NuevoComponent} from './producto/nuevo/nuevo.component';
import {ClienteListadoComponent} from './cliente/listado/listado.component';
import {ClientenuevoComponent} from './cliente/clientenuevo/clientenuevo.component';
import {BodyComponent} from './dashboard/body/body.component';

const routes: Routes = [
  { path: 'inventario', component: ListadoComponent},
  { path: 'inventario/producto/nuevo', component: NuevoComponent},
  { path: 'inventario/producto/listado', component: ListadoComponent},

  { path: 'cliente', component: ClienteListadoComponent},
  { path: 'cliente/nuevo', component: ClientenuevoComponent},
  { path: 'cliente/listado', component: ClienteListadoComponent},

  { path: 'dashboard', component: BodyComponent},

  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
