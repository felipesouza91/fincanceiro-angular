import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-pesquisa',
  templateUrl: './conta-pesquisa.component.html',
  styleUrls: ['./conta-pesquisa.component.css']
})
export class ContaPesquisaComponent implements OnInit {


  contas = [
    {'descricao': 'Conta Itau', 'status': 'Ativo'},
    {'descricao': 'Conta Bradesco', 'status': 'Ativo'},
    {'descricao': 'Conta XP', 'status': 'Inativo'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
