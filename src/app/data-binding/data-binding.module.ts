import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { IgxButtonModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path:"",
    component:DataBindingComponent
  }
];
@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule, IgxButtonModule, RouterModule.forChild(routes), FormsModule
  ]
})
export class DataBindingModule { }
