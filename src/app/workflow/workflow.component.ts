import { Component } from '@angular/core';
import { MaterialModule } from '../shared/common/material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-workflow',
  imports: [CommonModule, MaterialModule, RouterOutlet],
  standalone: true,
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  showFiller = false;
  sideNavList = [
    {icon: 'dashboard', name: 'Dashboard', url: '/workflow'},
    {icon: 'list', name: 'Billing', url: '/workflow/billing'},
    {icon: 'supervisor_account', name: 'Customers', url: '/workflow/customer'},
    {icon: 'notes', name: 'Invoice', url: '/workflow/invoice'},
    {icon: 'shopping_cart', name: 'Models', url: '/workflow/models'}
  ]
  currentRoute: string;
  header = 'Billing';
  isDarkMode = false;

  constructor(private router: Router, private themeService: ThemeService) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  navigate(url: string, titleName: string) {
    this.header = titleName
    this.router.navigateByUrl(url);
  }

  themeSet(){
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }
}
