import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistration } from '../models/user-registration';
import { UserService } from '../user.service';
import { Store, select } from '@ngrx/store';
import { UserState, getRegisterState } from '../store/user.state';
import { UserRegisterAction } from '../store/user.action';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup
  constructor(private userService: UserService, private store: Store<UserState>) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'emailId': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(254), Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(254)]),
      'dateOfBirth': new FormControl(null, []),
      'contact': new FormControl(null, [])
    })
    this.store.pipe(select(getRegisterState)).subscribe(x => console.log(x))
  }

  onRegister() {
    let userInfo: UserRegistration = {
      emailId: this.signUpForm.controls.emailId.value,
      firstName: this.signUpForm.controls.firstName.value,
      lastName: this.signUpForm.controls.lastName.value,
      password: this.signUpForm.controls.password.value,
      dateOfBirth: this.signUpForm.controls.dateOfBirth.value,
      contact: this.signUpForm.controls.contact.value
    }
    this.store.dispatch(new UserRegisterAction(userInfo));
    //this.store.dispatch({ type: 'user.register', payload: userInfo });
    //this.userService.registerUser(userInfo);
  }
}
