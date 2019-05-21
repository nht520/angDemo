import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { SettingComponent } from './components/setting/setting.component';
@NgModule({
  declarations: [
    UserComponent, ProfileComponent,
    AddressComponent, SettingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [ /* 暴露模块让其他模块可以使用 */
    UserComponent, ProfileComponent,
    AddressComponent, SettingComponent
  ]
})
export class UserModule { }
