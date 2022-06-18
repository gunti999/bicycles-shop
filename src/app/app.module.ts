import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    AboutComponent,
    ContactsComponent,
    ProductsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
