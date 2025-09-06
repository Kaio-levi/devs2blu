import { Component } from '@angular/core';
import { Autenticacao } from '../../servicos/autenticacao';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  //construtor
  constructor(private servico:Autenticacao, private router:Router) {}

  //metodo para efetuar o login
  logar():void{
    this.servico.login('meu-login');
    this.router.navigate(['/admin']);
  }

}
