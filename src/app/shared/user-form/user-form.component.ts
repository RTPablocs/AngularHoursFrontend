import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { formDataEmitter } from 'src/app/core/models/form';
import { commonUser, loggedUser } from 'src/app/core/models/users';
;


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    constructor() { }
    @Output() dataToSubmit = new EventEmitter<formDataEmitter>()

    dataSubmitScheme: formDataEmitter = {
        isOpen: false
    }

    userData = new FormGroup({
        name: new FormControl(null),
        surname: new FormControl(null),
        username: new FormControl(null),
        department: new FormControl(null),
        mail: new FormControl(null),
        password: new FormControl(this.generateBasicPassword())
    })

    ngOnInit(): void {

    }

    eventSubmitData() {
        console.log(this.userData.value);

        this.dataToSubmit.emit(this.userData.value)
        this.resetEverything()
    }

    emitCloseBox(): void {
        this.dataSubmitScheme.isOpen = false
        delete this.dataSubmitScheme.userData
        this.dataToSubmit.emit(this.dataSubmitScheme)
    }

    generateBasicPassword(): string {
        return Math.random().toString(36).slice(-8)
    }


    resetEverything(): void {
        this.userData.reset()
    }

}
