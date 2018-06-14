import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Regra } from '../shared/regra.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  @ViewChild('add') public formAdd: NgForm

  public painel:Regra[] = [

    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "TCP", porta: "21", entrada:"entrada"},
    { ipOrigem: "192.168.5.200", ipDestino: "192.168.5.78", protocolo: "UDP", porta: "4444", entrada:"saida"},
  
  ]

  constructor() { }

  ngOnInit() {
  }

  public adicionar(){

    let ipOrigem = this.formAdd.value.ipOrigem

    let ipDestino = this.formAdd.value.ipDestino

    let protocolo = this.formAdd.value.protocolo

    let porta = this.formAdd.value.porta

    let entrada = this.formAdd.value.entrada

    let indice  = this.painel.length

    this.painel[indice] = new Regra(ipOrigem, ipDestino, protocolo, porta, entrada )
  }
  //adicionar um nova regra

}
