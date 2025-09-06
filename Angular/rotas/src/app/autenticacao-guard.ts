import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  
  //constante para inicializar um objeto
  const r = inject(Router);

  //capturar o 'token' no localStorage
  const token = localStorage.getItem('token');

  //verificar se o token existe
  if(token){
    return true;
  }else{
    r.navigate(['/produto']);
  }

  //redirecionamento
  // r.navigatebyUrl('/produto');
  r.navigate(['/produto']);

  //retorno 
  return false;
};
