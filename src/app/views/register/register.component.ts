import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../Modules/Login/authentication.service';

@Component({
    selector:'app-register',
    styleUrls:['./register.component.scss'],
    templateUrl:'./register.component.html'
})
export class RegisterComponent{
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        if (this.authenticationService.userValue) { 
            this.router.navigate(['/']);
        }
    }
    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            password_confirm:['',Validators.required]
        });
    }
}