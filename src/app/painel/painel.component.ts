import { Component, OnInit } from '@angular/core';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';
import { Pack } from '../shared/pack.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']

})
export class PainelComponent implements OnInit {

  /* Atributos da class */

  public informacao:Pack[]
  //espera informação do arquivo

  public fileText;
  //informação dentro do arquivo

  public painel:Pack[] = [

    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "TCP", porta: "21", entrada:"entrada"},
    { ipOrigem: "192.168.5.200", ipDestino: "192.168.5.78", protocolo: "UDP", porta: "4444", entrada:"saida"},
  
  ]
  // informações estáticas no painel

  public editar:number;
  //pegar indice que vai ser editado


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

  public editarSalva(editar){

    console.log(editar)

    this.painel[this.editar].ipOrigem = editar.value.ipOrigem

    this.painel[this.editar].ipDestino = editar.value.ipDestino
    
    this.painel[this.editar].protocolo = editar.value.protocolo

    this.painel[this.editar].porta = editar.value.porta

    this.painel[this.editar].entrada = editar.value.entrada
  }

  public adicionar(add){
    
  }

  public export():void{

    for(let i:number = 0; i< this.informacao.length; i++ ){
    
      this.informacao[i]
    }
     
    new Angular2Txt(this.informacao, 'PACOTE999');
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

  public verifiacarpainel():void{
    let Arquivo:Pack[] = [

      { ipOrigem: this.fileText[0], ipDestino: this.fileText[1], protocolo: this.fileText[2], porta: this.fileText[3], entrada:this.fileText[4]},
    ]
    
    this.informacao = Arquivo

    for(let i:number = 0 ;i < this.informacao.length ; i++){

      if(this.informacao[i].ipOrigem == this.painel[i].ipOrigem){
        
        alert ('ip origem passou')
        
          if(this.informacao[i].ipDestino == this.painel[i].ipDestino){

            alert('ip destino passou')

              if( this.informacao[i].protocolo == this.painel[i].protocolo || this.informacao[i].protocolo == this.painel[i].protocolo || this.informacao[i].protocolo == this.painel[i].protocolo){

                alert('protocolo passou')

                  if(this.informacao[i].porta ==this.painel[i].porta || this.informacao[i].porta ==this.painel[i].porta || this.informacao[i].porta ==this.painel[i].porta || this.informacao[i].porta == this.painel[i].porta){

                    alert('porta passou')

                    if(this.informacao[i].entrada ==this.painel[i].entrada){

                      alert('destino passou')

                    }else{

                    alert('destino bloquiou')
                    break
                  }
                }else{
                alert('porta bloquiou')
                break
              }
            }else{

            alert('protocolo bloquiou')
            this.informacao[i] = null
            break
          }
        }else{

          alert('ip destino bloquiou')
          this.informacao[i] = null
          break   
        }
      }else{
        
        alert('ip origem bloquiou')
        this.informacao[i] = null
        break
      }
    }
  }
}
