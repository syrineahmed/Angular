import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {CoreComponent} from "./core/core.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {FormComponent} from "./form/form.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '',redirectTo:'/home', pathMatch:'full'}, //route par defaut
  {path: 'product',component:ProductComponent},
  {path:'residence',component:CoreComponent},
  {path:'form',component:FormComponent},
  {path:'product/:id',component:DetailProductComponent}, //id fl url
  //route not found ** yani autre que eli andi o lezm iji ekhr whd
  {path:'Addproduct',component:AddProductComponent},
  {path:'updateP/:id',component:UpdateProductComponent},

  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
