import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: `<img [src]="url" [alt]="titulo" class="card-img-top">`,
    styles: []
})
export class FotoComponent {

    @Input() titulo = ''
    @Input() url = ''
             descricao = ''
             _id = ''


}