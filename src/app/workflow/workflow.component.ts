import { Component } from '@angular/core';
import { MaterialModule } from '../shared/common/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workflow',
  imports: [CommonModule, MaterialModule],
  standalone: true,
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  showFiller = false;
  sideNavList = [
    {icon: 'dashboard', name: 'Dashboard', url: ''},
    {icon: 'list', name: 'Billing', url: ''},
    {icon: 'supervisor_account', name: 'Customers', url: ''}
  ]
}
