import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Autentificacao {

  autentificarToken = new BehaviorSubject<boolean>(this.vericarToken());

  vericarToken(): boolean {
  return !!localStorage.getItem('token');
  }

  login(token: string): void {
    localStorage.setItem('token', token);
    this.autentificarToken.next(true);
  }

  logoff(): void {
    localStorage.removeItem('token');
    this.autentificarToken.next(false);
  }
}
