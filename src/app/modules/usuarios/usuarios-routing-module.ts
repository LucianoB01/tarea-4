import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuarios,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
