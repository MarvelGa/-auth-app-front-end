import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoreModule } from "./core/core.module";
import { LoginModule } from "./pages/login/login.module";
import { AppRoutingModule } from './app-routing.module';
import { MainModule} from "./pages/main/main.module";
import { LoginRoutingModule } from './pages/login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    MainModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
