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
        path: 'conciertos/slug/:slug', loadComponent: () => import('./shared/add-concierto/add-concierto').then(m => m.AddConcierto)
    }, {
        path: 'conciertos/add', loadComponent: () => import('./shared/add-concierto/add-concierto').then(m => m.AddConcierto)
    }
];
