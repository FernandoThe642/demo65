import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MisionComponent } from './pages/mision/mision.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerrosComponent } from './pages/perros/perros.component';

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
    },
    {
        path: 'pages/perros',
        component: PerrosComponent
    }

];
//Dividir también crear un acerca de, unos datos personales y un inicio