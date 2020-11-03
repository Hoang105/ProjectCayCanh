import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PagingModule } from '../../Share/Paging/Paging.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PagingModule,
        NgbModule,
        NgSelectModule,
        ClientRoutingModule,
        PopoverModule.forRoot(),
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
        }),
    ],
    declarations: [ ClientComponent ]
})
export class ClientModule{

}