import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-buttons',
    templateUrl: './user-buttons.component.html',
    styleUrls: ['./user-buttons.component.css']
})
export class UserButtonsComponent implements OnInit {

    constructor() { }
    @Output() hasUpdatedAnything = new EventEmitter<any>()
    @Output() isGoingToDelete = new EventEmitter<any>()


    ngOnInit(): void {
    }

    notifyUpdateChanges(): void {
        this.emitDataToParent(this.hasUpdatedAnything, true)

    }

    setDeleteMode(): void {
        this.emitDataToParent(this.isGoingToDelete, true)
    }

    emitDataToParent(outputPlace: EventEmitter<boolean>, value: boolean): void {
        outputPlace.emit(value)

    }
    resetEverything(): void {
    }

}
