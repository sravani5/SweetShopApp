import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatInputModule,MatSelectModule,MatFormFieldModule} from '@angular/material';
import{MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
        {path: 'order', component: CustomerOrderComponent},
        {path: '', component: HomecomponentComponent},
        {path: 'about', component: HomecomponentComponent},
        {path: 'admin', component: AdminComponent},
        {path: 'menu', component: MenuComponent}
      ];
@NgModule({
  declarations: [
    AppComponent,
    CustomerOrderComponent,
    HomecomponentComponent,
    AdminComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
