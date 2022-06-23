import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { BasketComponent } from './components/header/components/basket/basket.component';
import { LogInComponent } from './components/header/components/log-in/log-in.component';
import { LogInContentComponent } from './components/header/components/log-in/components/log-in-content/log-in-content.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { RegistrationComponent } from './components/header/components/registration/registration.component';
import { RegistrationContentComponent } from './components/header/components/registration/components/registration-content/registration-content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogOutComponent } from './components/header/components/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    AboutComponent,
    ContactsComponent,
    ProductsFilterPipe,
    BasketComponent,
    LogInComponent,
    LogInContentComponent,
    RegistrationComponent,
    RegistrationContentComponent,
    HeaderComponent,
    FooterComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
