import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path:"addProduct", component:AddproductComponent},
  {path:"",redirectTo:"addProduct",pathMatch:"full"},
  {path:"**",redirectTo:"addProduct"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }