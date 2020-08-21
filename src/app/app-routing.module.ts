import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {
    path : 'Home-page',
    component : HeaderComponent
  },
  {
    path : 'Contact-page',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
