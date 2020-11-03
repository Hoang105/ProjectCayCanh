import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { finalize, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoaderService } from '../../Share/Loading/Loader.service';

@Injectable({
    providedIn: 'root'
})
export class AdminService{
    constructor(public Http: HttpClient, public loaderService: LoaderService) { }
    Loading(observable: Observable<HttpResponse<any>>, isShowLoading?: boolean): Observable<HttpResponse<any>> {
        if (!Boolean(isShowLoading)) {
            isShowLoading = true;
        }
        if (isShowLoading) {
            this.showLoader();
        }
        return observable.pipe(
            tap((res: HttpResponse<any>) => {
                console.log("Response" + res);
                }, (err: any) => {
                    if (isShowLoading) {
                    this.hideLoader();
                    }
                    console.log("Error!");
                }),
            finalize(() => {
                if (isShowLoading) {
                    this.hideLoader();
                }
            })
        )
    }
    showLoader() {
        this.loaderService.show();
        document.body.classList.remove('loading-hide');
    }
    
    hideLoader() {
        this.loaderService.hide();
        document.body.classList.add('loading-hide');
    }
    getHeader(): HttpHeaders {
        let header = new HttpHeaders({
          'content-type': 'application/json; charset=utf-8',
          'authorization': "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlZib0lnTmJ2eXBHUm1fSm53dXFJWXUzZ3owcyIsImtpZCI6IlZib0lnTmJ2eXBHUm1fSm53dXFJWXUzZ3owcyJ9.eyJhdWQiOiJFcHVyY2hhc2UiLCJpc3MiOiJodHRwczovL2FkZnMuZnB0LmNvbS52bi9hZGZzIiwiaWF0IjoxNTg4NzM3OTAxLCJleHAiOjE1ODg3NDE1MDEsImF1dGhfdGltZSI6MTU4ODczMDUwNSwic3ViIjoiYWh3N2lBWXdTRnY2NUsxTm1WOUlJbXM0eG5GMjdUTzdoWmxxdUpBMXYrVT0iLCJ1cG4iOiJmaW0udGVzdDEwQGZwdC5jb20udm4iLCJ1bmlxdWVfbmFtZSI6IkhPLkZQVC5WTlxcZmltLnRlc3QxMCIsInB3ZF91cmwiOiJodHRwczovL2FkZnMuZnB0LmNvbS52bi9hZGZzL3BvcnRhbC91cGRhdGVwYXNzd29yZC8iLCJzaWQiOiJTLTEtNS0yMS0xNjMwODgyODY2LTE1NjE4NjQ3OTItMTc1NzQ3OTQwNy0xMjIxNjUifQ.sh1Yt3Ai6rqCNw4Qsdj_M0HQzHej57mTc9wmmXLTpSg5Ok_3HSOBpSo96CTfzWTiuI_ximoj2eNlq0Ah4qMMvMa00QfMgoi9QM6AQ26tTfnk3hQQT0deE8nbs7nUC-RQQuwwYBCy5oBv4gRJcEPp7yL7oCaB-PkqnhwdXRCOwL3qSB_b1WdW45j2eMCDGEjZHxW9j3KFetfiDbTpfZ-ChxNo8MavlMvVtp63Zi1aZcFHK6LcJlVjnsauCXkg5giycqzGafioQar5ieJk4sCGpEReWDE5dad5uJjnypKXk-NA5Y2QtVqr1cmuEa4M92DEPdfvVQLTwzmBa56Jt5tNTA"
        });
        return header;
    }
    Gets(isShowLoading?: boolean): Observable<any> {
        return this.Loading(this.Http.get<any>(`/api/Admins`, {
          observe: 'response',  
          headers: this.getHeader(),
        }), isShowLoading).pipe(map(r => r.body));
    }
}