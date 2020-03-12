import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaPesquisasComponent } from './categoria-pesquisas/categoria-pesquisas.component';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriasRoutingModule } from './categorias-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DataTableModule, SelectButtonModule, DropdownModule,
  ToggleButtonModule, SharedModule } from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SelectButtonModule,
    DropdownModule,
    ToggleButtonModule,
    
    SharedModule,
    CategoriasRoutingModule
  ],
  declarations: [CategoriaPesquisasComponent, CategoriaCadastroComponent]
})
export class CategoriasModule { }
