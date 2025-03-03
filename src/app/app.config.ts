import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};