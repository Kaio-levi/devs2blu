import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Autentificacao } from '../../servico/autentificacao';


@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  existeToken: boolean = false;

  constructor(private router: Router, private as: Autentificacao) { }

  sair(): void {
    this.as.logoff();
    this.router.navigateByUrl('/feed');
  }

  verificarToken(): void {
    if (localStorage.getItem('token')) {
      this.as.autentificarToken.subscribe(valor => this.existeToken = valor);
    }
  }

  ngOnInit(): void {
    this.verificarToken();
  }
}
