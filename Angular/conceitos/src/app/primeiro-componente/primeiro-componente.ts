import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css'
})
export class PrimeiroComponente {
  //variavel para dar uma brincada
  texto:String = 'Aprendendo Angular';


  //Função para retornar um texto
  funcaoTexto():String{
    return 'Exibindo um texto via função!';
  }

  /*
  Tipos de dados - TS
  string  -> texto
  number  -> numeros
  boolean -> logicos(true/false)
  any     -> informação flexícel

  para Funções podemos ultilizar void
  minhaFuncao():void{}
  */
}
