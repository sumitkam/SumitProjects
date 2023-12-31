import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from "./layout/header/header.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainComponent } from './layout/main/main.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { TodoListComponent } from './components/tasks/todo-list/todo-list.component';
import { PortfolioComponent } from './components/tasks/portfolio/portfolio.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        InfoCardsComponent,
        TodoListComponent,
        PortfolioComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule
    ]
})
export class AppModule { }
