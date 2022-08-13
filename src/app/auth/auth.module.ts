import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PrimengModule } from '../primeng/primeng.module';
import { StartedComponent } from './pages/started/started.component';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    LoginComponent,
    StartedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    AngularFireModule
  ]
})
export class AuthModule { }
