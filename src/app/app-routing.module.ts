import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaveenTableComponent } from './naveen-table/naveen-table.component';

const routes: Routes = [{path:'table',component:NaveenTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
