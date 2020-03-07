import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas-pesquisas',
  templateUrl: './metas-pesquisas.component.html',
  styleUrls: ['./metas-pesquisas.component.css']
})
export class MetasPesquisasComponent implements OnInit {

  metas= [
    {'descricao': ' Gastos com Transporte' , 'valor': 'R$ 2.500,00', 'categoria': 'Transportes'},
    {'descricao': ' Gastos com Alimentação' , 'valor': 'R$ 3.500,00', 'categoria': 'Alimentação'},
    {'descricao': ' Gastos com Saude' , 'valor': 'R$ 7.500,00', 'categoria': 'Saude'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
