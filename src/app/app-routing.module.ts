import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TelefonComponent} from './telefon/telefon.component';
import {KarsilastirComponent} from './karsilastir/karsilastir.component';
import {TelefonStartComponent} from './telefon/telefon-start/telefon-start.component';
import {DetailComponent} from './telefon/detail/detail.component';
import {TelefonEditComponent} from './telefon/telefon-edit/telefon-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/telefon', pathMatch: 'full'},
  {path: 'telefon', component: TelefonComponent , children: [
    {path: '' , component: TelefonStartComponent},
    {path: 'new' , component: TelefonEditComponent},
    {path: ':id' , component: DetailComponent},
    {path: ':id/edit' , component: TelefonEditComponent}
  ]},
  {path: 'karsilastir', component: KarsilastirComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
