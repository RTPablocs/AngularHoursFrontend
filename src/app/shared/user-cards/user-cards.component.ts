import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { commonUser, userList } from '../../core/models/users';
import { UsersService } from '../../core/services/http/users.service';

@Component({
    selector: 'app-user-cards',
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

    constructor(private userHttp: UsersService) { }

    editing = false
    @Input() user!: commonUser
    @Output() deletedUser = new EventEmitter<string>()

    userForm = new FormGroup({
        name: new FormControl(null),
        surname: new FormControl(null),
        username: new FormControl(null),
        mail: new FormControl(null),
        department: new FormControl(null)
    })


    ngOnInit(): void {
    }

    switchEditMode(): void {
        this.editing = !this.editing
    }

    submitFormData(): void {
        this.sanitizeFormOutput()
        this.userHttp.updateUser(this.user.id, this.userForm.value)
            .subscribe(data => this.user = data)
        this.userForm.reset()
        this.switchEditMode()
    }

    deleteUser(): void {
        this.deletedUser.emit(this.user.id)
    }

    sanitizeFormOutput(): void {
        Object.keys(this.userForm.value).forEach((key) => {
            this.userForm.value[key] == null && delete this.userForm.value[key]
        })
    }
}
