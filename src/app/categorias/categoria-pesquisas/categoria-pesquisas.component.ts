import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categoria-pesquisas',
  templateUrl: './categoria-pesquisas.component.html',
  styleUrls: ['./categoria-pesquisas.component.css']
})
export class CategoriaPesquisasComponent implements OnInit {

  formPesquisa: FormGroup;

  categorias = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.iniciarCategoria();
    this.iniciaFormulario();
  }

  iniciarCategoria(){
    this.categoriaService.listarTodas()
      .then(resp => {
        console.log(resp);
        this.categorias = resp
      } );
  }

  pesquisar() {
    console.log(this.formPesquisa.value);
  }

  iniciaFormulario() {
    this.formPesquisa = new FormGroup({
      nome: new FormControl()
    });
  }
}