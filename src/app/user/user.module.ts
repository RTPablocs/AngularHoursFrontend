import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardsComponent } from '../shared/user-cards/user-cards.component';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import {
    Edit,
    X,
    Check,
    Trash2
} from 'lucide-angular';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    LucideAngularModule.pick({
        Edit,
        Check,
        X,
        Trash2
    })
  ]
})
export class UserModule { }
