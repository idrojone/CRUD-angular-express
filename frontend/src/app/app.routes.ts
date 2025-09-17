import { Routes } from '@angular/router';
import { ApiService } from './core/services';


export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },{
        path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },{
        path: 'conciertos', loadComponent: () => import('./pages/conciertos/conciertos').then(m => m.Conciertos)
    }, 
    {
        path: 'conciertos/:id', loadComponent: () => import('./pages/conciertos/conciertos').then(m => m.Conciertos)
    }
];
