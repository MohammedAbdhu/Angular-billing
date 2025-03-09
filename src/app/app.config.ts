import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'workflow',
    component: WorkflowComponent,
    children: [
      { path: 'customer', loadComponent: () => import('./workflow/billing-workflow/customer/customer.component').then(m => m.CustomerComponent) },
      { path: 'billing', loadComponent: () => import('./workflow/billing-workflow/billings/billings.component').then(m => m.BillingsComponent) },
      { path: 'models', loadComponent: () => import('./workflow/billing-workflow/stock-models/stock-models.component').then(m => m.StockModelsComponent) },
      { path: 'invoice', loadComponent: () => import('./workflow/billing-workflow/invoice/invoice.component').then(m => m.InvoiceComponent) },
      { path: 'dashboard', loadComponent: () => import('./workflow/billing-workflow/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: '', redirectTo: 'billing', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
   ]
};