import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AdminComponent } from './admin/admin.component';
import { RecepFunctionsComponent } from './recep-functions/recep-functions.component';
import { OwnerFunctionsComponent } from './owner-functions/owner-functions.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AdminFunctionComponent } from './admin-functions/admin-function/admin-function.component';
import { RoomComponent } from './room/room/room.component';
import { OwnerComponent } from './owner/owner/owner.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { AboutComponent } from './about/about/about.component';
import { FooterComponent } from './footer/footer/footer.component';
import { provideRouter } from '@angular/router';
import { LoginOwnerComponent } from './login-owner/login-owner/login-owner.component';
import { LoginRecepComponent } from './login-recep/login-recep/login-recep.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ReceptionistComponent,
    AdminComponent,
    RecepFunctionsComponent,
    OwnerFunctionsComponent,
    AdminFunctionComponent,
    RoomComponent,
    OwnerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    FooterComponent,
    LoginOwnerComponent,
    LoginRecepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    provideHttpClient(withFetch()),
    // provideRouter(routes),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
