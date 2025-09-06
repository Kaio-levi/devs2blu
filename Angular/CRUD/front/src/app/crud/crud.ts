import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Pessoa } from '../modelo/Pessoa';
import { PessoasApi } from '../servicos/pessoas-api';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-crud',
  imports: [MatFormField, MatInputModule, MatButton, ReactiveFormsModule, CommonModule, MatTableModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class Crud {

  //visibilidade dos botões
  btnCadstrar: boolean = true;

  //objeto do formulário reativo
  formularioPessoa = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    cidade: new FormControl()
  });

  //colunas da tabela
  colunas: String[] = ['id', 'nome', 'cidade', 'selecionar'];

  //vetor para armazenar as pessoas
  vetor: Pessoa[] = [];

  //construtor
  constructor(private servico: PessoasApi) { }

  //ngOnInit
  ngOnInit(): void {
    this.listar();
  }
  //método para listar todas as pessoas
  listar() {
    this.servico.listar().subscribe(pessoas => this.vetor = pessoas)
  }

  //metodo para cadastrar pessoas
  //spread operator serve para clonar o objeto 
  cadastrar(): void {
    let obj = { ...this.formularioPessoa.value }
    delete obj.id;
    this.servico.cadastrar(obj).subscribe(pessoa => this.vetor = [...this.vetor, pessoa]);
  }

  selecionar(id: string): void {
    this.servico.selecionarPessoa(id)
      .subscribe(pessoa => {
        //1° maneira
        // this.formularioPessoa.get('id')?.setValue(pessoa.id);
        // this.formularioPessoa.get('nome')?.setValue(pessoa.nome);
        // this.formularioPessoa.get('cidade')?.setValue(pessoa.cidade);
        
        //2° maneira
        this.formularioPessoa.patchValue(pessoa);
        this.btnCadstrar = false;
      });

  }
  //metodo para cancelar as ações da alçteração
  cancelar(): void {
    this.formularioPessoa.reset();
    this.btnCadstrar = true;
  }

  //método para alterar pessoas
  alterar(): void {
    this.servico.alterar(this.formularioPessoa.value)
      .subscribe(pessoa => {
        //obter o indice da pessoa alterada no vetor
        const indicePessoaAlterada = this.vetor.findIndex(obj => obj.id === pessoa.id);
        //atualizar valor do vetor
        this.vetor[indicePessoaAlterada] = pessoa;
        //Forçar a atualização do vetor
        this.vetor = [...this.vetor];
        //reset do formulário e limpeza dos campos
        this.cancelar();
      });
  }

  //metodo para remover pessoas
  remover(): void {
    this.servico.remover(this.formularioPessoa.value.id)
      .subscribe(pessoa => {
        //obter o indice da pessoa alterada no vetor
        const indicePessoaRemovida = this.vetor.findIndex(obj => obj.id === pessoa.id);
        //efetuar a remoção no vetor
        this.vetor.splice(indicePessoaRemovida, 1)
        //Forçar a atualização do vetor
        this.vetor = [...this.vetor];
        //reset do formulário e limpeza dos campos
        this.cancelar();
      });
  }

}
