import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()

  constructor(private conexaoApi: HttpClient) { }

  ngOnInit() {
  }

  salvar(){
  
    this.conexaoApi
        .post('http://localhost:3000/v1/fotos',
        this.foto, {
          headers: new HttpHeaders({'Content-Type':'application/json'})
        })
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
