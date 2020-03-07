import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetasPesquisasComponent } from './metas-pesquisas/metas-pesquisas.component';
import { MetasCadastroComponent } from './metas-cadastro/metas-cadastro.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DataTableModule,
  SelectButtonModule, DropdownModule, ToggleButtonModule, SharedModule } from 'primeng/primeng';
import { MetasRoutingModule } from './metas-routing.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SelectButtonModule,
    DropdownModule,
    ToggleButtonModule,
    
    SharedModule,
    MetasRoutingModule
  ],
  declarations: [MetasPesquisasComponent, MetasCadastroComponent]
})
export class MetasModule { }
