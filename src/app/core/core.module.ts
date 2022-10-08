import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {LogoComponent} from "./logo/logo.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    FooterComponent,
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    LogoComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
