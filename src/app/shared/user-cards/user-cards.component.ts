import {Component, OnInit} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {loggedUser} from '../../core/models/users';

@Component({
    selector: 'app-user-cards',
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

    constructor() {
    }

    editing = false
    @Input() user!: loggedUser
    @Output() deletedUser = new EventEmitter<string>()
    @Output() updatedUser = new EventEmitter<loggedUser>()


    ngOnInit(): void {
    }

    switchEditMode(): void {
        console.log('D')
        this.editing = !this.editing
    }


    deleteUser(): void {
        this.deletedUser.emit(this.user.id)

    }

    decideNextStep(arg: any): void {
        arg.hasOwnProperty('userData')? this.submitChanges(arg.userData): this.switchEditMode()
    }

    submitChanges(data: loggedUser): void {
        console.log('S')
        this.updatedUser.emit(data)
        this.switchEditMode()
    }


    log(arg: any): void {
        console.log(arg);
    }
}
