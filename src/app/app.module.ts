import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelefonComponent } from './telefon/telefon.component';
import { DetailComponent } from './telefon/detail/detail.component';
import { ListComponent } from './telefon/list/list.component';
import { ItemComponent } from './telefon/list/item/item.component';
import { KarsilastirComponent } from './karsilastir/karsilastir.component';
import { EditComponent } from './karsilastir/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {KarsilastirService} from './karsilastir/karsilastir.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { TelefonStartComponent } from './telefon/telefon-start/telefon-start.component';
import { TelefonEditComponent } from './telefon/telefon-edit/telefon-edit.component';
import {TelefonService} from './telefon/telefon.service';

@NgModule({
  declarations: [
    AppComponent,
    TelefonComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    KarsilastirComponent,
    EditComponent,
    HeaderComponent,
    DropdownDirective,
    TelefonStartComponent,
    TelefonEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [KarsilastirService, TelefonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
