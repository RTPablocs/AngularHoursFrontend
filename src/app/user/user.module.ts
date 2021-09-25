import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardsComponent } from '../shared/user-cards/user-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import {
    Edit,
    X,
    Check,
    Trash2,
    Star
} from 'lucide-angular';
import { UserFiltersComponent } from './user-filters/user-filters.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardsComponent,
    UserFiltersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    LucideAngularModule.pick({
        Edit,
        Check,
        X,
        Trash2,
        Star
    }),
    ReactiveFormsModule
  ]
})
export class UserModule { }
