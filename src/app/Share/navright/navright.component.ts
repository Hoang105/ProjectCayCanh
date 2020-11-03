import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { navright, NavRight } from './nav-right';

@Component({
    selector: 'app-navright',
    templateUrl: './navright.component.html',
    styleUrls: ['./navright.component.scss']
})
export class NavRightComponent implements OnChanges, OnInit{
    nav_right:NavRight[]=navright
    constructor(){
  
    }
    ngOnChanges(changes: SimpleChanges){
    }
    ngOnInit(){
      
    }
    gotocart(){
  
    }
}
@NgModule({
    declarations: [
      NavRightComponent,
    ],
    imports: [
      CommonModule,
    ],
    exports: [
        NavRightComponent
    ],  
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavRightModule { }