import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-formulario-cadastro',
  imports: [FormsModule],
  templateUrl: './formulario-cadastro.html',
  styleUrl: './formulario-cadastro.css'
})
export class FormularioCadastro {


  nome:string = '';
  cidade:string = '';


  //implementar @output (ter acesso ao métod de castro do componente pai)
  @Output() adicionar = new EventEmitter<Pessoa>();

  //metodo de cadastro do componete formulario-cadastro
  cadastrar():void{
    //criar um objeto do tipo Pessoa
    let p: Pessoa = new Pessoa();
    p.nome = this.nome;
    p.cidade = this.cidade;

    //eviar o obj para o @Output (adicionar)
    this.adicionar.emit(p);

    //limpar os campos
    this.nome = '';
    this.cidade = '';
  }
}