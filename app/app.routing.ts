import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero-detail.component';
import { DashboardComponent }      from './dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);