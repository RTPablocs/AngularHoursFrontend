import { Component, Input, OnInit } from '@angular/core';
import { commonUser } from 'src/app/core/models/users';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

    constructor() {
        this.user = {
            id: '',
            name: '',
            surname: '',
            username: '',
            email: ''
        }
    }

    @Input() user: commonUser

    ngOnInit(): void {
    }

}
