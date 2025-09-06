import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Autenticacao {
  
  //objeto para verificar se ha token no localstroage

  autenticarToken = new BehaviorSubject<boolean>(this.verificarToken());

  //metodo que verifica se há token
  verificarToken():boolean{
    //1° maneira
    // if(localStorage.getItem('token')){
    //   return true;
    // }else{
    //   return false;
    // }

    //2° maneira
    // return localStorage.getItem('token') ? true : false;

    //3° maneira (truthy e falsy)
    //True: se houver letras, numeros, valores logicos, vetores, etc...
    //False: se houver null, undefined
    return !!localStorage.getItem('token');
  }

  //metodo para realizar o login (criar o token)
  login(token:string):void{
    localStorage.setItem('token', token);
    this.autenticarToken.next(true);
  }

  //metodo para realizar o logoff (remover o token)
  logoff():void{
    localStorage.removeItem('token');
    this.autenticarToken.next(false);
  }

}
