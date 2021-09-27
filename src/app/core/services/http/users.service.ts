import { Injectable } from '@angular/core';
import { loggedUser, commonUser, userList } from '../../models/users';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private api: ApiService) { }

    getAllUsers(): Observable<userList> {
        return this.api.get('users')
    }

    getOneUser(id: string): Observable<commonUser> {
        return this.api.get(`users/${id}`)
    }

    getOwnData(id: string): Observable<loggedUser> {
        return this.api.get(`users/mydata/${id}`)
    }

    createUser(body: Object): Observable<loggedUser> {
        return this.api.post('users/new', body)
    }

    updateUser(id: string, body: Object): Observable<commonUser> {
        return this.api.patch(`users/update/${id}`, body)
    }

    deleteUser(id: string): Observable<any> {
        return this.api.delete(`users/delete/${id}`)
    }
}
