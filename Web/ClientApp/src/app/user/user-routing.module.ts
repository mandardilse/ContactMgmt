import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user', children: [
      { path: '', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
