import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Lecture1/header/header.component';
import { FooterComponent } from './Lecture1/footer/footer.component';
import { ProductsComponent } from './Lecture1/products/products.component';
import { ServerComponent } from './lecture2/server/server.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1/task1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ServerComponent,
    Task1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
