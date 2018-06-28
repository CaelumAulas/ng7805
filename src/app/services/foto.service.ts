import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

const base_url = 'http://localhost:3000/'

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = `${base_url}v1/fotos`
    private cabecalho = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Object> {
        return this.conexaoApi.get(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.post(this.url,foto)
    }

    deletar(){}

    alterar(){}

    pesquisar(){}

}