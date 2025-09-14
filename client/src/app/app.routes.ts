import { Routes } from '@angular/router';
import { ConciertosPage } from './pages/conciertos-page/conciertos-page';
import { Conciertos } from './components/list-conciertos/list-conciertos';

export const routes: Routes = [
    { path: '', component: Conciertos },
    { path: 'conciertos', component: ConciertosPage }
];
