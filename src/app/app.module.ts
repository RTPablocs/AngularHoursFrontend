import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LucideAngularModule } from 'lucide-angular';
import { Clock, BarChart2, ArrowLeft, Award, Printer, Send, User, Plus, Calendar} from 'lucide-angular';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LucideAngularModule.pick({
            Clock,
            BarChart2,
            ArrowLeft,
            Award,
            Printer,
            Send,
            User,
            Plus,
            Calendar
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
