import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css'
})
export class DataBindings {
  imagem:string = 'crie uma imagem do McQueen correndo junto com o max verstapen em uma pista de corrida.jpg';

  //Função para alterar a imagem
  funcao():void{
    this.imagem = this.imagem === 'crie uma imagem do McQueen correndo junto com o max verstapen em uma pista de corrida.jpg' ? 'paozinho odeia lamborghini.jpg' : 'crie uma imagem do McQueen correndo junto com o max verstapen em uma pista de corrida.jpg'
  }
}
