import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../Models/User/User.Entity';
import { AdminService } from '../../Modules/admin/admin.service';
import { page } from '../../Share/Paging/Page';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap';
import { RoleEntity } from '../../Models/User/Role.Entity';

@Component({
    selector:'app-admin',
    styleUrls:['./admin.component.scss'],
    templateUrl:'./admin.component.html'
})
export class AdminComponent implements OnInit{
    Paging:page=new page();
    count;number=0;
    addUser:boolean=false;
    users:UserEntity[];
    userAdd:UserEntity = new UserEntity();
    closeResult = ''; 
    selectedOption:string;
    userRole={
        User:'User',
        Admin:'Admin'
    }
    constructor(
        private _adminservice:AdminService,
        private modalService: NgbModal
    ){

    }
    selectOption(e){
        this.userAdd.role=e;
    }
    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
        result => {
            if(result=="save click"){
                //post data
            }
        this.closeResult = `Closed with: ${result}`; 
        }, (reason) => { 
        this.closeResult =  
            `Dismissed ${this.getDismissReason(reason)}`; 
        }); 
    } 
    private getDismissReason(reason: any): string { 
        if (reason === ModalDismissReasons.ESC) { 
        return 'by pressing ESC'; 
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
        return 'by clicking on a backdrop'; 
        } else { 
        return `with: ${reason}`; 
        } 
    } 
    getUser(event){
        this._adminservice.Gets().subscribe(
            data=>{
                console.log(data)
                this.users=data;
                this.count=this.users.length;
            }
        )
    }
    ngOnInit(){
        this._adminservice.Gets().subscribe(
            data=>{
                this.users=data;
                this.count=this.users.length;
            }
        )
    }
}