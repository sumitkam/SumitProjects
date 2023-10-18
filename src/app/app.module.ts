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
import { FormValidationsComponent } from './components/tasks/form-validations/form-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoListEditDialogComponent } from './components/tasks/todo-list/todo-list-edit-dialog/todo-list-edit-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        InfoCardsComponent,
        TodoListComponent,
        PortfolioComponent,
        FormValidationsComponent,
        TodoListEditDialogComponent
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
        MatGridListModule,
        FormsModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class AppModule { }
