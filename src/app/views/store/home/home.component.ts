import { Component } from "@angular/core";
import { navright, NavRight } from '../../../Share/navright/nav-right';

@Component({
    selector:'app-home',
    styleUrls:['./home.component.scss'],
    templateUrl:'./home.component.html'
})
export class HomeComponent{
    nav_right:NavRight[]=navright;
}