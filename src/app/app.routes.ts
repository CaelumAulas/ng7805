import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotasApp:Routes =  [
    {path: "", component: ListagemComponent},
    {path: "cadastro", component: CadastroComponent },
    {path: "cadastro/:fotoId", component: CadastroComponent},
    {path: '**', redirectTo: ""}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)