import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/http/users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor(private http: UsersService) { }

    listUsers: any

    ngOnInit(): void {
        this.http.getAllUsers().subscribe((data: any) => {
            this.listUsers = data.users
        })

    }

}
