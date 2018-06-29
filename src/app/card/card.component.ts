import { Component, Input } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles: []  
})
export class CardComponent {
    @Input() fotoObj: FotoComponent    
}