import { Component, OnInit } from '@angular/core';
import { commonUser, userList } from '../../core/models/users';
import { UsersService } from '../../core/services/http/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    constructor(private UserHttp: UsersService) { }

    userList !: commonUser[]

    ngOnInit(): void {
        this.UserHttp.getAllUsers()
            .subscribe((data) => {
                this.userList = data.users
                console.log(this.userList)
            })
    }

}
