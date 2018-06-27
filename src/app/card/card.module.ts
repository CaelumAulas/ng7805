import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { FotoModule } from "../foto/foto.module";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [FotoModule]
})
export class CardModule{}