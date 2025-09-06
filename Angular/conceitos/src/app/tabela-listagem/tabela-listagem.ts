import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';


@Component({
  selector: 'app-tabela-listagem',
  imports: [],
  templateUrl: './tabela-listagem.html',
  styleUrl: './tabela-listagem.css'
})
export class TabelaListagem {

  //Receber o vetor de pessoas via @Input
  @Input() vetor:Pessoa[] = [];

  //Interligar a ação de remoção de pessoas entre componente pai e filho
  @Output() excluir = new EventEmitter<number>();

  //metodo de remover
  remvoer(indice:number):void{
    this.excluir.emit(indice);
  }
}
