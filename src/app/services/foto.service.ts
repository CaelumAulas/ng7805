import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

const base_url = 'http://localhost:3000/'

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = `${base_url}v1/fotos/`
    private cabecalho = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.post(this.url,foto, this.cabecalho)
    }

    deletar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.delete(this.url+foto._id)
    }
    
    pesquisar(fotoId: string): Observable<FotoComponent>{
        return this.conexaoApi.get<FotoComponent>(this.url+fotoId)
    }
    
    alterar(foto: FotoComponent): Observable<Object>{
        return this.conexaoApi.put(this.url+foto._id,foto)
    }

}