import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()
  formCadastro: FormGroup //propriedade do tipo formulario

  constructor(private servico: FotoService,
              private rotaAtiva: ActivatedRoute,
              private roteador: Router,
              private formBuilder: FormBuilder) {

        this.formCadastro = this.formBuilder.group({
          titulo: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])],
          url: ['', Validators.required],
          descricao: ''
        })
  }

  ngOnInit() {
    let fotoId = this.rotaAtiva.snapshot.params.fotoId

    if (fotoId) {
      this.servico
        .pesquisar(fotoId)
        .subscribe(
          fotoApi => {
            this.foto = fotoApi
            // this.formCadastro.get('titulo').setValue(fotoApi.titulo)
            // this.formCadastro.get('url').setValue(fotoApi.url)
            // this.formCadastro.get('descricao').setValue(fotoApi.descricao)
            //ou
            //this.formCadastro.setValue(fotoApi)
            //ou essa lindeza
            this.formCadastro.patchValue(fotoApi)
            
          }
        )
    }

    
  }
  
  salvar(){
    
      // this.foto.titulo = this.formCadastro.get('titulo').value
      // this.foto.url = this.formCadastro.get('url').value
      // this.foto.descricao = this.formCadastro.get('descricao').value

      //ou essa lindeza
      this.foto = this.formCadastro.value

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
