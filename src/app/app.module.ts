import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddUserComponent, ButtonComponent, UserItemComponent} from "./components";
import { RolePermissionDirective, DropdownDirective } from './directives';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/dropdown/dropdown-item/dropdown-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserItemComponent,
    ButtonComponent,
    RolePermissionDirective,
    DropdownDirective,
    DropdownComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
