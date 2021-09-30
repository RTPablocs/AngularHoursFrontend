import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { commonUser, loggedUser } from 'src/app/core/models/users';
;


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

    constructor() { }
    @Output() userToSubmit = new EventEmitter<loggedUser>()

    userData = new FormGroup({
        name: new FormControl(null),
        surname: new FormControl(null),
        username: new FormControl(null),
        department: new FormControl(null),
        mail: new FormControl(null),
        password: new FormControl(null)
    })

    ngOnInit(): void {
    }

    eventSubmitData() {
        this.userToSubmit.emit(this.userData.value)
    }

    generatePassword(): void {

    }

    resetEverything(): void {
        this.userData.reset()
    }

}
