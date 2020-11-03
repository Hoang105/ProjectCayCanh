import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../Models/User/User.Entity';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<UserEntity[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<UserEntity>(`${environment.apiUrl}/users/${id}`);
    }
}