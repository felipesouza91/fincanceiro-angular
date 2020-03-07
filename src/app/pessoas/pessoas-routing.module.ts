import { AuthGuard } from 'app/seguranca/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['5']}
  },
  {
    path: 'pessoas/nova',
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['3']}
  },
  {
    path: 'pessoas/:codigo',
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['5']}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
