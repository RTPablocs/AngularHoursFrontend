import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { commonUser } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/http/users.service';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

    constructor(private userHttp: UsersService) { }

    editing = false
    @Input() user!: commonUser

    userForm = new FormGroup({
        name: new FormControl(''),
        username: new FormControl(''),
        mail: new FormControl(''),
        department: new FormControl('')
    })


    ngOnInit(): void {
    }

    switchEditMode(): void {
        this.editing = !this.editing
    }

    submitFormData(): void {
        console.log(this.userForm.value, this.user.id);
        this.userForm.reset()
        this.switchEditMode()
    }

    deleteUser(): void {
        console.log(this.user.id);

        this.userHttp.deleteOneUser(this.user.id)
    }
}
