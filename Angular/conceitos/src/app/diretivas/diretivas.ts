import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventoMouse } from '../minha-diretiva/evento-mouse';

@Component({
  selector: 'app-diretivas',
  imports: [CommonModule, EventoMouse], //para funcionar as diretivas
  templateUrl: './diretivas.html',
  styleUrl: './diretivas.css'
})
export class Diretivas {
  //vetor contendo a situação dos alunos da escola
  alunos:string[] = ['aprovado','aprovado','reprovado','aprovado'];
  
  //variavies
  corFonte:string = 'yellow';
  corFundo:string = 'green';


  estilo ={
    'color':this.corFonte,
    'background-color':this.corFundo
  }


  //função para alterar as propriedades CSS
  alterarEstilo():void{
    this.corFonte = this.corFonte === 'yellow' ? 'blue' : 'yellow';
    this.corFundo = this.corFundo === 'green' ? 'red' : 'green';
    
    this.estilo ={
    'color':this.corFonte,
    'background-color':this.corFundo
    }
  }
}
