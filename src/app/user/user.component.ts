import { Component, OnInit } from '@angular/core';
import { userList } from '../core/models/users';
import { UsersService } from '../core/services/http/users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor(private UserHttp: UsersService) { }

    userList !: userList

    ngOnInit(): void {
        this.UserHttp.getAllUsers()
            .subscribe((data) => this.userList = data)
    }

}
