import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home/home.component';
import { DocPrintComponent } from './doc-print/doc-print.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DocPrintComponent,
        PageNotFoundComponent,
        ItemEditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        InputTextareaModule,
        DropdownModule,
        SelectButtonModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
