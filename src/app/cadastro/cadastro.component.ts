import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()

  constructor(private servico: FotoService,
              private rotaAtiva: ActivatedRoute,
              private roteador: Router) {

      let fotoId = this.rotaAtiva.snapshot.params.fotoId
        
      if (fotoId){
        this.servico
            .pesquisar(fotoId)
            .subscribe(
              fotoApi => this.foto = fotoApi
            )
      }
        
      // this.rotaAtiva.params.subscribe( 
      //   parametrosRota => {
      //     this.servico
      //         .pesquisar(parametrosRota.fotoId)
      //         .subscribe(
      //           fotoApi => this.foto = fotoApi
      //         )
      //   }
      // )
                
  }

  ngOnInit() {
  }

  salvar(){

      if(this.foto._id){
        this.servico
            .alterar(this.foto)
            .subscribe(
              () => {
                this.mensagem.texto = `${this.foto.titulo} alterada com sucesso`
                this.mensagem.tipo = 'success'

                setTimeout(() => {
                  this.roteador.navigate([''])
                }, 3000);


              }
            )
      }
      else 
      {

        this.servico
            .cadastrar(this.foto)
            .subscribe(
              () => {
                this.mensagem.texto = `${this.foto.titulo} cadastrada com sucessoooo`
                this.mensagem.tipo = 'success'
              }
              ,erro => {
                this.mensagem.texto = `Oops deu errado, tente novamente mais tarde`
                this.mensagem.tipo = 'danger'
                console.log(erro)
              }
            )
      }
  
    
  }

}
