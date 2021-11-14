import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { HoverDirective } from './directives/hover.directive';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { BgColorDirective } from './directives/bg-color.directive';
import { AgePipe } from './pipes/age.pipe';
import { MapNamesPipe } from './pipes/map-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    HoverDirective,
    UsersComponent,
    UserItemComponent,
    BgColorDirective,
    AgePipe,
    MapNamesPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
