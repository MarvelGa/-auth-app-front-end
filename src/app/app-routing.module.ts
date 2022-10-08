import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard} from "./shared/auth-guard/auth.guard";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'main', loadChildren: () => import ('./pages/main/main.module').then(m => m.MainModule), canLoad: [AuthGuard]},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
