import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: AppComponent, canActivate: [authGuard]},
    {path: 'login', loadChildren:() => import('./login/login.component').then(m => m.LoginComponent)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
