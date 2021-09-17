import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loggedUser, commonUser, userList} from '../../models/users';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<userList>{
        return this.http.get<userList>('http://localhost:3000/users')
    }

}
