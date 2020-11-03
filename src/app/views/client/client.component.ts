import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientEntity } from '../../Models/Client/Client.Entity';
import { ClientService } from '../../Modules/client/client.service';
import { page } from '../../Share/Paging/Page';

@Component({
    selector:'app-client',
    styleUrls:['./client.component.scss'],
    templateUrl:'./client.component.html'
})
export class ClientComponent implements OnInit,OnChanges{
    Paging:page=new page();
    count;number=0;
    clients:ClientEntity[];
    Addclient:ClientEntity = new ClientEntity();
    closeResult = ''; 
    constructor(
        private _adminservice:ClientService,
        private modalService: NgbModal
    ){

    }
    ngOnChanges(changes){
        this._adminservice.Gets().subscribe(
            data=>{
                this.clients=data;
                this.count=this.clients.length;
            }
        )
    }
    open(data,content) {
        if(data==''){
            this.Addclient=new ClientEntity();
            this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
                result => {
                    if(result=="Save click"){
                        this._adminservice.Post(this.Addclient).subscribe(
                            data=>{
                                this.ngOnChanges(data)
                            }
                        )
                    }
                this.closeResult = `Closed with: ${result}`; 
                }, (reason) => { 
                this.closeResult =  
                    `Dismissed ${this.getDismissReason(reason)}`; 
                }
            ); 
        }
        else{
            this.Addclient=data;
            // this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'});
            this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
                result => {
                    if(result=="Save click"){
                        this._adminservice.Put(this.Addclient).subscribe(
                            data=>{
                                this.ngOnChanges(data)
                            }
                        )
                    }
                this.closeResult = `Closed with: ${result}`; 
                }, (reason) => { 
                this.closeResult =  
                    `Dismissed ${this.getDismissReason(reason)}`; 
                }
            ); 
        }
    } 
    editClient(data,content){
        this.open(data,content)
    }
    deletebyId(data){
        this._adminservice.DeleteById(data).subscribe(data=>
            {
                this.ngOnChanges(data);
            }
            );
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
                this.clients=data;
                this.count=this.clients.length;
            }
        )
    }
    ngOnInit(){
        this._adminservice.Gets().subscribe(
            data=>{
                this.clients=data;
                this.count=this.clients.length;
            }
        )
    }

}