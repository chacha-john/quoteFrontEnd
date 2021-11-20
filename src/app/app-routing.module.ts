import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'quotes', 
    pathMatch: 'full'
  },
  {
    path:'quotes',
    component:QuotesComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
