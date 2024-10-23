import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MisionComponent } from './pages/mision/mision.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [

    {
        path: 'pages/inicio',
        component: InicioComponent
    },
    {
        path: 'pages/acerca-de',
        component: AcercaDeComponent
    },
    {
        path: 'pages/mision',
        component: MisionComponent
        }
];
//Dividir también crear un acerca de, unos datos personales y un inicio