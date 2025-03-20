import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
