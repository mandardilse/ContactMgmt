import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistration } from '../models/user-registration';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'emailId': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(254), Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(254)]),
      'dateOfBirth': new FormControl(null, []),
      'contact': new FormControl(null, [])
    })
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
    this.userService.registerUser(userInfo);
  }
}
