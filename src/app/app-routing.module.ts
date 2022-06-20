import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductsComponent } from './components/pages/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
