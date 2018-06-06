import { Component, OnInit } from '@angular/core';
import { Pack } from '../shared/pack.model';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']

})
export class PainelComponent implements OnInit {

  public informacao:Pack[]

  public fileText;

  public pack:Pack[] = [

    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "TCP", porta: "21", entrada:"entrada"},
    { ipOrigem: "192.168.5.78", ipDestino: "192.168.5.78", protocolo: "UDP", porta: "4444", entrada:"saida"},
  
  ]

  constructor() {
  
  }
  ngOnInit() {
  }

  public edit(i:number):void{
    //this.pack[i].ipOrigem = ""
    //this.pack[i].ipDestino = ""
    //this.pack[i].protocolo = ""
    //this.pack[i].porta = ""
    //this.pack[i].entrada = ""
  }

  public onClickSubmit(data):void{

    console.log(data.ipOrigem)
  }

  public del(i:number):void{

    console.log(i)
    this.pack.splice(i , 1)
  }

  public add():void{

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

  public verifiacarPack():void{
    let Arquivo:Pack[] = [

      { ipOrigem: this.fileText[0], ipDestino: this.fileText[1], protocolo: this.fileText[2], porta: this.fileText[3], entrada:this.fileText[4]},
    ]
    
    this.informacao = Arquivo

    for(let i:number = 0 ;i < this.informacao.length ; i++){

      if(this.informacao[i].ipOrigem == this.pack[i].ipOrigem){
        
        alert ('ip origem passou')
        
          if(this.informacao[i].ipDestino == this.pack[i].ipDestino){

            alert('ip destino passou')

              if( this.informacao[i].protocolo == this.pack[i].protocolo || this.informacao[i].protocolo == this.pack[i].protocolo || this.informacao[i].protocolo == this.pack[i].protocolo){

                alert('protocolo passou')

                  if(this.informacao[i].porta ==this.pack[i].porta || this.informacao[i].porta ==this.pack[i].porta || this.informacao[i].porta ==this.pack[i].porta || this.informacao[i].porta == this.pack[i].porta){

                    alert('porta passou')

                    if(this.informacao[i].entrada ==this.pack[i].entrada){

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
