import { Component, OnInit, ViewChild } from '@angular/core';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';
import { Pack } from '../shared/pack.model';
import { Regra } from '../shared/regra.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']

})
export class PainelComponent implements OnInit {

  /* Atributos da class */

  @ViewChild('editar') public formEditar: NgForm

  @ViewChild('add') public formAdd: NgForm

  public informacao:Pack[]
  //espera informação do arquivo

  public fileText;
  //informação dentro do arquivo

  public painel:Regra[] = [

    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "TCP", porta: "21", entrada:"entrada"},
    { ipOrigem: "192.168.5.200", ipDestino: "192.168.5.78", protocolo: "UDP", porta: "4444", entrada:"saida"},
  
  ]
  // informações estáticas no painel

  public editar:number
  //pegar indice que vai ser editado

  public mostrar:Regra = this.painel[this.editar]
  /* Metodos */
  
  constructor() { 
   
  }
  ngOnInit() {
  }

  public del(i:number):void{

    this.painel.splice(i , 1)
  }

  public getEditar(i:number):void{
   
    this.editar = i
  }

  public editarSalva(){

    let ipOrigem = this.formEditar.value.ipOrigem

    let ipDestino = this.formEditar.value.ipDestino

    let protocolo = this.formEditar.value.protocolo

    let porta = this.formEditar.value.porta

    let entrada = this.formEditar.value.entrada



    this.painel[this.editar].ipOrigem = ipOrigem

    this.painel[this.editar].ipDestino = ipDestino
    
    this.painel[this.editar].protocolo = protocolo

    this.painel[this.editar].porta = porta

    this.painel[this.editar].entrada = entrada
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

  public export():void{

    for(let i:number = 0; i< this.painel.length; i++ ){
    
      this.painel[i]
    }
     
    new Angular2Txt(this.painel, 'PACOTE999');
  }

  public getFile(event):void{

    let reader = new FileReader(); 
      
    reader.readAsText(event.srcElement.files[0])
    
    let me = this;

    reader.onload = function(){
      me.fileText = reader.result;
      me.fileText = me.fileText.split( ',');
      console.log(me.fileText)

      
    }
  }

  public verifiacarRegras():void{
  
    let ipOrigem = false

    let ipDestino = false

    let protocolo = false

    let porta = false

    let entrada = false
    
    let Arquivo:Pack[] = [

      { ipOrigem: this.fileText[0], ipDestino: this.fileText[1], protocolo: this.fileText[2], porta: this.fileText[3], entrada: this.fileText[4]},
      { ipOrigem: this.fileText[5], ipDestino: this.fileText[6], protocolo: this.fileText[7], porta:this.fileText[8], entrada: this.fileText[9]}
    ]
    //informações vinda do pacote sendo atribuidas a variavel Arquivo que e um array de objetos
    
    this.informacao = Arquivo
    //Atributo da class pegado a informação do arquivo

    for(let i:number = 0 ;i < this.informacao.length ; i++){

      if(this.informacao[i].ipOrigem == this.painel[i].ipOrigem){

        ipOrigem = true
      }     
      if(this.informacao[i].ipDestino == this.painel[i].ipDestino){

        ipDestino = true
      }
      if(this.informacao[i].protocolo == this.painel[i].protocolo){

         protocolo = true
      }
      if(this.informacao[i].porta == this.painel[i].porta){

         porta = true
      }
      if(this.informacao[i].entrada == this.painel[i].entrada){

        entrada = true
      }
      console.log(ipOrigem, ipDestino,protocolo, porta, entrada)
      if( ipOrigem && ipDestino && protocolo && porta && entrada ){

        alert('pacote passou pelas regras')
      }else{

        alert('pacote não passou pelas regras')
        break
      }
    }    
  }
}
