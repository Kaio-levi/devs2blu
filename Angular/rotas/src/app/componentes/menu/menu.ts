import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Autenticacao } from '../../servicos/autenticacao';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  //variavel para verificar a existencia do token
  existeToken: boolean = false;

  //construtor
  constructor(private router:Router, private as:Autenticacao) {}

  //metodo de logout
  sair():void{
    this.as.logoff();
    this.router.navigateByUrl('/produto');
  }

  //Metodo para verificar se o token esta disponivel
  verifcarToken():void {
    if(localStorage.getItem('token')){
      this.as.autenticarToken.subscribe(valor => this.existeToken = valor);
    }
  }

  ngOnInit(): void {
    this.verifcarToken();
  }
}
