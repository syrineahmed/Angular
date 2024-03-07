import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStageComponent} from "./add-stage/add-stage.component";
import {ConsulterStageComponent} from "./consulter-stage/consulter-stage.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
//{path: 'home',component:HomeComponent},
//   {path: '',redirectTo:'/home', pathMatch:'full'}, //route par defaut
  {path:'addstage',component:AddStageComponent},

  {path:'consulter',component:ConsulterStageComponent},
  {path: '',redirectTo:'/consulter', pathMatch:'full'},
{path:'**' ,component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
