import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-buttons',
    templateUrl: './user-buttons.component.html',
    styleUrls: ['./user-buttons.component.css']
})
export class UserButtonsComponent implements OnInit {

    constructor() { }
    @Input() disablEditMode !: boolean
    @Output() hasUpdatedAnything = new EventEmitter<any>()
    @Output() hasFinishedEditing = new EventEmitter<any>()
    @Output() isGoingToDelete = new EventEmitter<any>()

    isEditing = false
    isDeleting = false
    isSubmiting = false

    ngOnInit(): void {
        if (this.disablEditMode) {
            this.isEditing = true
        }
    }

    notifyUpdateChanges(): void {
        if (!this.disablEditMode) { this.isEditing = !this.isEditing }
        this.isSubmiting = true
        this.emitDataToParent(this.hasUpdatedAnything, this.isSubmiting)
        this.isSubmiting = false
        console.log('A');


    }

    toggleEditMode(): void {
        this.isEditing = !this.isEditing
        this.emitDataToParent(this.hasFinishedEditing, this.isEditing)

    }

    setDeleteMode(): void {
        this.isDeleting = !this.isDeleting
        this.emitDataToParent(this.isGoingToDelete, this.isDeleting)
    }

    emitDataToParent(outputPlace: EventEmitter<boolean>, value: boolean): void {
        outputPlace.emit(value)
    }

}
