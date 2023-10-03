import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import {Ps5Component} from './pages/ps5/ps5.component'
import { Ps4Component } from './pages/ps4/ps4.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{path:'ps4',component: Ps4Component},
	{path: 'ps5', component: Ps5Component },
	{path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
