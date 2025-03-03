import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './shared/common/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'angular-billing';
}
