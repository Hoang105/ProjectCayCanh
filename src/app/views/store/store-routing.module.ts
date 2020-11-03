import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'home'
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'home'
        }
      },
      {
        path: 'info',
        component: InfoComponent,
        data: {
          title: 'info'
        }
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule{

}