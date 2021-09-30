import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserButtonsComponent } from './user-buttons/user-buttons.component';
import { LucideAngularModule } from 'lucide-angular';
import { Check, Cross, Edit, } from 'lucide-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    UserButtonsComponent,
    UserFormComponent,
    ClockComponent
  ],
  exports: [
      UserButtonsComponent,
      UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
        Check,
        Cross,
        Edit
    })
  ]
})
export class SharedModule { }
