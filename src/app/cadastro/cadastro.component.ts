import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()

  constructor(private servico: FotoService) { }

  ngOnInit() {
  }

  salvar(){
  
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
