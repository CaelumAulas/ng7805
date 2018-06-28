import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = `Caelumpic`
  listaFotos

  constructor(private servico: FotoService) {
    this.listaFotos = this.servico.listar()
  }

  ngOnInit() {
  }

}
