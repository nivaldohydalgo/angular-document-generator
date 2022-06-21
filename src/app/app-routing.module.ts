import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocPrintComponent } from './doc-print/doc-print.component';
import { ItemEditComponent } from './item-edit/item-edit.component'

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'doc-print', component: DocPrintComponent },
    { path: 'item-edit', component: ItemEditComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },   // redirect to `home`
    { path: '**', component: PageNotFoundComponent },         // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
