import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { commonUser } from '../core/models/users';
import { UsersService } from '../core/services/http/users.service';

@Component({
    selector: 'app-user-cards',
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

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
        this.userHttp.deleteOneUser(this.user.id)
    }

}
