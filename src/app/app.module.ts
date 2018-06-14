import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';



@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    RodapeComponent,
    EditarComponent,
    DeletarComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
