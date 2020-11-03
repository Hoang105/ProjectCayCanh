import { Component } from "@angular/core";
import { navright, NavRight } from '../../../Share/navright/nav-right';

@Component({
    selector:'app-nav',
    templateUrl:'./nav.component.html',
    styleUrls:['./nav.component.scss']
})
export class NavComponent{
    slideIndex:number = 1;
    showMenu:boolean=false;
    nav_right:NavRight[]=navright;
    constructor(){
    }
    ngOnInit(){
    }
}