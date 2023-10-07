import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Mdcomp1Component } from './mdcomp1/mdcomp1.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'mycomp/:greeting',
      component: Mdcomp1Component,
      title: 'My first component'
    }
  ];
  
  export default routeConfig;