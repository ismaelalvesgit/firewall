import { Component, OnInit } from '@angular/core';
import { Regra } from '../shared/regra.model';


@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  public painel:Regra[] = [

    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "TCP", porta: "21", entrada:"entrada"},
    { ipOrigem: "192.168.5.200", ipDestino: "192.168.5.78", protocolo: "UDP", porta: "4444", entrada:"saida"},
  
  ]

  constructor() { }

  ngOnInit() {
  }

  public del(i:number):void{

    this.painel.splice(i , 1)
  }
  // metodo de deletar

}
