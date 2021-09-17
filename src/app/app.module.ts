import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LucideAngularModule } from 'lucide-angular';
import {
    Clock,
    BarChart2,
    ArrowLeft,
    Award,
    Printer,
    Send,
    User,
    Plus,
    Calendar,
    Edit,
    X,
    Settings
} from 'lucide-angular';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component'
@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        UserCardComponent,
        UserComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LucideAngularModule.pick({
            Clock,
            BarChart2,
            ArrowLeft,
            Award,
            Printer,
            Send,
            User,
            Plus,
            Calendar,
            Edit,
            X,
            Settings
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
