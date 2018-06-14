import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Regra } from '../shared/regra.model';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('editar') public formEditar: NgForm

  public editar:number
  //pegar indice que vai ser editado

  constructor() { }

  ngOnInit() {
  }

  public getEditar(i:number):void{
   
    this.editar = i
  }
  //pegar o indice

  @Input()public editarSalva(){

    let ipOrigem = this.formEditar.value.ipOrigem

    let ipDestino = this.formEditar.value.ipDestino

    let protocolo = this.formEditar.value.protocolo

    let porta = this.formEditar.value.porta

    let entrada = this.formEditar.value.entrada
  }
  // salvar a edição

}
