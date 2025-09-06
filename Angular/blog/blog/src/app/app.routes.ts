import { Routes } from '@angular/router';
import { Feed } from './pagina/feed/feed';
import { autenticationGuard } from './autentication-guard';


export const routes: Routes = [
    {path: 'feed', component: Feed},
    {path: 'feed/:categoria', loadComponent:() => import('./pagina/feed/feed').then(componente => componente.Feed)},
    {path: 'login', loadComponent:() => import('./pagina/login/login').then(componente => componente.Login)},
    {path: 'admin', loadComponent:() => import('./pagina/admin/admin').then(componente => componente.Admin), canActivate: [autenticationGuard]},
    {path: '', redirectTo: 'feed', pathMatch: 'full'}
];
