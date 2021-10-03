import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedUser } from 'src/app/core/models/users';

@Component({
    selector: 'app-user-creator',
    templateUrl: './user-creator.component.html',
    styleUrls: ['./user-creator.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '7vw',
                width: '18vw',
                backgroundColor: '#f26849',
                color: 'white'

            })),
            state('close', style({
                height: '2.5vw',
                width: '2.5vw',
                backgroundColor: '#d9d9d9',
                color:'black',
            })),
            transition('open <=> close', [
                animate('0.3s')
            ])
        ])
    ]
})
export class UserCreatorComponent implements OnInit {

    constructor() { }

    @Output('userCreated') user = new EventEmitter<loggedUser>()

    isOpen = false
    readyToSend = false

    userData = new FormGroup({
        name: new FormControl(null),
        surname: new FormControl(null),
        username: new FormControl(null),
        department: new FormControl(null),
        mail: new FormControl(null)
    })
    ngOnInit(): void {
    }


    toggle(){
        this.isOpen = !this.isOpen
    }

    closeCreator(state: any): void {
        this.isOpen = !state

    }

    triggerCreateUser(state: any): void {
        this.isOpen = !state
        this.readyToSend = state
    }

    log(args: any): void {
        console.log(args);

    }
}
