import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { TreeNode } from './TreeNode.Entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TreeNodeService {
    constructor(private http: HttpClient){
    }

    url = 'assets/data.json'
    Gets(): Observable<any> {
        return this.http.get<any>(this.url).pipe(map(r => r.data));
    }
}