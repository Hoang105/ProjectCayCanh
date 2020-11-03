import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'primeng/accordion';
import { TreeTableModule } from 'primeng/treetable';
import { InputCustomModule } from '../../Share/InputCustom/InputCustom.component';
import { NavRightModule } from '../../Share/navright/navright.component';
import { PagingModule } from '../../Share/Paging/Paging.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NavComponent } from './nav/nav.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreRoutingModule,
        BsDropdownModule.forRoot(),
        TabsModule,
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot(),
        ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger' // set defaults here
        }),
        ToastrModule.forRoot(),
        AccordionModule,
        TreeTableModule,
        PagingModule,
        InputCustomModule,
        NavRightModule
      ],
      exports: [
      ],
      declarations: [
        HomeComponent,
        InfoComponent
      ]
})
export class StoreModule{

}