import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './Modules/Login/auth.guard';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/Login.component';
import { RegisterComponent } from './views/register/register.component';
import { NavComponent } from './views/store/nav/nav.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'',
    component: NavComponent,
    data:{
      title:'nav'
    },
    children:[
      {
        path: 'home',
        loadChildren: () => import('./views/store/store.module').then(m => m.StoreModule)
      }
    ]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'register'
    }
  },
  {
    path: 'default',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'default'
    },
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
