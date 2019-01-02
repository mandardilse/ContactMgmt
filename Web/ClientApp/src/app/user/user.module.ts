import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffectService } from './store';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', UserReducer),
    EffectsModule.forFeature([])
  ]
})
export class UserModule { }
