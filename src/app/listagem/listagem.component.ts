import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { FotoComponent } from "../foto/foto.component";
import { Observable } from "rxjs";
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = `Caelumpic`
  listaFotos: FotoComponent[]
  mensagem = new MensagemComponent()

  constructor(private servico: FotoService) {
    this.servico.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi
    )
  }

  ngOnInit() {}

  apagar(foto: FotoComponent) {
    this.servico
        .deletar(foto)
        .subscribe(
          () => {
            this.mensagem.texto = `${foto.titulo} apagada com sucesso`
            this.mensagem.tipo = 'success'

            this.listaFotos = this
                              .listaFotos
                              .filter(fotoDaLista => fotoDaLista != foto)

            //this.listaFotos
            
          }
        )
  }

}
