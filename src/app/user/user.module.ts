import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCardsComponent } from './user-cards.component';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import {
    Edit,
    X,
    Check
} from 'lucide-angular';

@NgModule({
  declarations: [
    UserComponent,
    UserCardsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    LucideAngularModule.pick({
        Edit,
        Check,
        X
    })
  ]
})
export class UserModule { }
