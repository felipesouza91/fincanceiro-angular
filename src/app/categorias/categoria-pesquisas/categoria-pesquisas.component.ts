import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-pesquisas',
  templateUrl: './categoria-pesquisas.component.html',
  styleUrls: ['./categoria-pesquisas.component.css']
})
export class CategoriaPesquisasComponent implements OnInit {

  categorias = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.iniciarCategoria();
  }

  iniciarCategoria(){
    this.categoriaService.listarTodas()
      .then(resp => this.categorias = resp);
  }
}
