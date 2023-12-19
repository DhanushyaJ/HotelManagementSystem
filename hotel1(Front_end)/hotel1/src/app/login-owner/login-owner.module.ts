import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    LoginOwnerComponent
  ],
  imports: [
    CommonModule,
    NgForm
  ]
})
export class LoginOwnerModule { }
