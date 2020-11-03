import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PagingModule } from '../../Share/Paging/Paging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        ChartsModule,
        BsDropdownModule,
        ButtonsModule.forRoot(),
        PagingModule,
        NgbModule,
        NgSelectModule
    ],
    declarations: [ AdminComponent ]
})
export class AdminModule{

}