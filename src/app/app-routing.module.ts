import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgoComponent } from './algo/algo.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'sort', component: AlgoComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
