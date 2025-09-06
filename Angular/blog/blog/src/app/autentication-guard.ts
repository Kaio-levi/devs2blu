import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticationGuard: CanActivateFn = (route, state) => {
  const r = inject(Router);

  const token = localStorage.getItem('token');

  if(token){
    return true;
  } else{
    r.navigate(['/feed']);
  }
  
  r.navigate(['/feed']);

  return false;
};
