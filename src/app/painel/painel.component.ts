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

  public indiceInfor:Pack

  public fileText;

  constructor() {
    
  }
  ngOnInit() {
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
    
    
    let pack:Pack[] = [

      {id: this.fileText[0], origem: this.fileText[1], destino: this.fileText[2], protocolo: this.fileText[3], porta: this.fileText[4], dados:this.fileText[5]},
      {id: this.fileText[6], origem: this.fileText[7], destino: this.fileText[8], protocolo: this.fileText[9], porta: this.fileText[10], dados:this.fileText[11]},
      {id: this.fileText[12], origem: this.fileText[13], destino: this.fileText[14], protocolo: this.fileText[15], porta: this.fileText[16], dados:this.fileText[17]}

    ]
    
    this.informacao = pack

    for(let i:number = 0 ;i < this.informacao.length ; i++){

      if( this.informacao[i].id == '1' || this.informacao[i].id == '987' || this.informacao[i].id == '1523'){

        alert('id passou')

        if(this.informacao[i].origem == '192.168.5.78'){
          
         alert ('ip origem passou')
          
            if(this.informacao[i].destino == '192.168.5.78'){

              alert('ip destino passou')

                if( this.informacao[i].protocolo == 'TCP' || this.informacao[i].protocolo == 'UDP' || this.informacao[i].protocolo == 'ICMP'){

                  alert('protocolo passou')

                    if(this.informacao[i].porta == '21' || this.informacao[i].porta == '4444' || this.informacao[i].porta == '1433' || this.informacao[i].porta == '55890'){

                      alert('porta passou')
                    }else{

                      alert('porta bloquiou')
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

      }else{
        
        alert('id bloquiou')
        this.informacao[i] = null
        break
      }

    }

  }

}
