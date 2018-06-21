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

  public protocolos:string[]=[
    "UDP","TCP","ICMP","*"
  ]
  public painel:Regra[] = [

    {id:"987", nome:'ftp' , ipOrigem: "*", ipDestino: "192.168.2.100", destino:"ENTRADA", protocolo: this.protocolos[1], portaI: "0", portaF:"65535", acao:'permitir',  },
    {id:"12", nome:'ssh', ipOrigem: "*", ipDestino: "*", destino:"SAIDA" , protocolo: this.protocolos[2], portaI: "0", portaF:'65535', acao:'negar' },
    {id:"13", nome:'ssh', ipOrigem: "*", ipDestino: "*", destino:"SAIDA" , protocolo: this.protocolos[0], portaI: "0", portaF:'65535', acao:'permitir' },
    {id:"14", nome:'ssh', ipOrigem: "100.20.10.2", ipDestino: "*", destino:"SAIDA" , protocolo: this.protocolos[2], portaI: "11000", portaF:'13000', acao:'permitir' },
    {id:"15", nome:'ssh', ipOrigem: "*", ipDestino: "*", destino:"SAIDA" , protocolo: this.protocolos[3], portaI: "0", portaF:'65535', acao:'negar' }


  
  ]
  // informações estáticas no painel

  public editar:number
  //pegar indice que vai ser editado

  public editarIpOrigem:boolean = false
  public editarIpDestino:boolean = false
  public addIpOrigem:boolean = false
  public addIpDestino:boolean = false

  public mostrar:Regra = this.painel[this.editar]
  /* Metodos */
  
  public validPacote = false

  constructor() { 
  }
  ngOnInit() {
  }

  public editarValidOrigem( ip:Event ):void{
    let value = (<HTMLInputElement>ip.target).value

    if(value == "*"){
      this.editarIpOrigem = false

    }else{

    let teste = value.split(".")

    if( teste.length == 4 ){
      for(let i = 0; i < 4; i++){

        let num = parseInt(teste[i])
        console.log(num)
        if(num >=1 && num <=255){
          this.editarIpOrigem = false
        }
        else {
          this.editarIpOrigem = true
          break
          }
        }
      }
    }
  }

  public editarValidDestino( ip:Event ):void{
    let value = (<HTMLInputElement>ip.target).value

    if( value == "*"){

      this.editarIpDestino = false
    }else{

    let teste = value.split(".")

    if( teste.length == 4 ){

      for(let i = 0; i < 4; i++){

        let num = parseInt(teste[i])
        console.log(num)
        if(num >=1 && num <=255){
          this.editarIpDestino = false
        }
        else {
          this.editarIpDestino = true
          break
          }
        } 
      }
    }
  }

  public addValidOrigem( ip:Event ):void{
    let value = (<HTMLInputElement>ip.target).value

    if( value == "*"){

      this.addIpOrigem = false
    }else{

    let teste = value.split(".")
    
    if( teste.length == 4 ){

      for(let i = 0; i < 4; i++){

        let num = parseInt(teste[i])
        console.log(num)
        if(num >=1 && num <=255){
          this.addIpOrigem = false
        }
        else {
          this.addIpOrigem = true
          break
          }
        }
      }
    }
  }

  public addValidDestino( ip:Event ):void{
    let value = (<HTMLInputElement>ip.target).value

    if(value == "*"){

      this.addIpDestino = false
    }else{

    let teste = value.split(".")

    if( teste.length == 4 ){
      for(let i = 0; i < 4; i++){

        let num = parseInt(teste[i])
        console.log(num)
        if(num >=1 && num <=255){
          this.addIpDestino = false
        }
        else {
          this.addIpDestino = true
          break
          }
        }
      }
    }
  }

  public subir(i:number){
    this.painel.unshift(this.painel[i])
   this.painel.splice(i + 1, 1)
  }

  public descer(i:number){
    this.painel.push(this.painel[i])
    this.painel.splice(i,1)
  }

  public del(i:number):void{

    this.painel.splice(i , 1)
  }
  // metodo de deletar

  public getEditar(i:number):void{
   
    this.editar = i
  }
  //pegar o indice

  public editarSalva(){
    
    let id = this.formEditar.value.id

    let nome = this.formEditar.value.nome

    let ipOrigem = this.formEditar.value.ipOrigem

    let ipDestino = this.formEditar.value.ipDestino

    let destino = this.formEditar.value.destino

    let protocolo = this.formEditar.value.protocolo

    let portaI = this.formEditar.value.portaI

    let portaF = this.formEditar.value.portaF

    let acao = this.formEditar.value.acao

    this.painel[this.editar].id = id

    this.painel[this.editar].nome = nome

    this.painel[this.editar].ipOrigem = ipOrigem

    this.painel[this.editar].ipDestino = ipDestino

    this.painel[this.editar].destino = destino
    
    this.painel[this.editar].protocolo = protocolo

    this.painel[this.editar].portaI = portaI

    this.painel[this.editar].portaF = portaF

    this.painel[this.editar].acao = acao
  }
  // salvar a edição

  public adicionar(){

    let id = this.formAdd.value.id

    let nome = this.formAdd.value.nome

    let ipOrigem = this.formAdd.value.ipOrigem

    let ipDestino = this.formAdd.value.ipDestino

    let destino = this.formAdd.value.destino

    let protocolo = this.formAdd.value.protocolo

    let portaI = this.formAdd.value.portaI

    let portaF = this.formAdd.value.portaF

    let acao = this.formAdd.value.acao

    let indice  = this.painel.length

    this.painel[indice] = new Regra(id, nome, ipOrigem, ipDestino, destino, protocolo, portaI, portaF, acao )
  }
  //adicionar um nova regra
  
  public getFile(event):void{

    let reader = new FileReader(); 
      
    reader.readAsText(event.srcElement.files[0])
    
    let me = this;

    reader.onload = function(){
      me.fileText = reader.result;
      /*
      me.fileText = me.fileText.replace("\r", "")//retira quebra linha
      me.fileText = me.fileText.replace("\t", "")//retira quebra linha
      me.fileText = me.fileText.replace("\n", "")//retira quebra linha
      me.fileText = me.fileText.replace(/[\\"]/g, '')//retira ""*/
      me.fileText = me.fileText.split("\r")

      parseInt(me.fileText[0])
      
      if(me.fileText[0] != 5 || me.fileText.length !=7 ){
        alert( `O pacote ${me.fileText[0]} linhas`)
        alert("pacote foi bloquiado")
        
      }

      me.fileText = me.fileText.toString()
      
      me.fileText = me.fileText.split(",")

    }
  }
  //pegar arquivo importado

  public verifiacarRegras():void{
  
    let ipOrigem = false

    let ipDestino = false

    let protocolo = false

    let porta = false

    let entrada = false

    let acao = false
    
    

    let Arquivo:Pack[] = [

      { ipOrigem: this.fileText[2], ipDestino: this.fileText[3], protocolo: this.fileText[4], porta: this.fileText[5], destino: this.fileText[6], dados: this.fileText[7]},
      { ipOrigem: this.fileText[9], ipDestino: this.fileText[10], protocolo: this.fileText[11], porta: this.fileText[12], destino: this.fileText[13], dados: this.fileText[14]},
      { ipOrigem: this.fileText[16], ipDestino: this.fileText[17], protocolo: this.fileText[18], porta: this.fileText[19], destino: this.fileText[20], dados: this.fileText[21]},
      { ipOrigem: this.fileText[23], ipDestino: this.fileText[24], protocolo: this.fileText[25], porta: this.fileText[26], destino: this.fileText[27], dados: this.fileText[28]},
      { ipOrigem: this.fileText[30], ipDestino: this.fileText[31], protocolo: this.fileText[32], porta: this.fileText[33], destino: this.fileText[34], dados: this.fileText[35]}
    ]
    //informações vinda do pacote sendo atribuidas a variavel Arquivo que e um array de objetos
    
    this.informacao = Arquivo
    console.log(this.informacao)
    //Atributo da class pegado a informação do arquivo
    
    for(let i:number = 0 ;i < this.informacao.length ; i++){
      for(let p :number = 0; p < this.painel.length; p++ ){

        parseInt(this.informacao[i].porta)
        parseInt(this.painel[p].portaI)
        parseInt(this.painel[p].portaF) 

        console.log(this.painel[p].portaI)
        console.log(this.painel[p].portaF)

        if(this.informacao[i].ipOrigem == this.painel[p].ipOrigem || this.painel[p].ipOrigem == "*"){

          ipOrigem = true
        }else{
          ipOrigem = false
        }     
        if(this.informacao[i].ipDestino == this.painel[p].ipDestino || this.painel[p].ipDestino == "*"){

          ipDestino = true
        }else{
          ipDestino = false
        }
        if(this.informacao[i].protocolo == this.painel[p].protocolo || this.painel[p].protocolo == "*"){

          protocolo = true
        }else{
          protocolo = false
        }
        if(this.informacao[i].porta >= this.painel[p].portaI || this.informacao[i].porta <= this.painel[p].portaF){
          porta = true
        }else{
          porta = false
        }
        if(this.informacao[i].destino == this.painel[p].destino){

          entrada = true
        }else{
          entrada = false
        }
        if(this.painel[p].acao == "permitir"){
          acao = true
        }else{
          acao = false
        }
        console.log(ipOrigem, ipDestino,protocolo, porta, entrada, acao)
        if( ipOrigem && ipDestino && protocolo && porta && entrada && acao ){

          alert(`linha ${i+1} passou pelas regra ${this.painel[p].id}`)
        }else{

          alert(`linha ${i+1} não passou pela regra ${this.painel[p].id}`)
          break
        }
      }  
    }
  }
  //Faz a verificação se a regra que esta no painel esta igual ao pacote

  public export():void{

    for(let i:number = 0; i< this.painel.length; i++ ){
    
      this.painel[i]
    }
     
    new Angular2Txt(this.painel, 'PACOTE999');

    for(let i:number = 0; i< this.informacao.length; i++ ){
    
      this.informacao[i]
    }
     
    new Angular2Txt(this.informacao, 'PACOTE999');
  }
  //exporta arquivo texto
}
