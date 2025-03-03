import { Component } from '@angular/core';
import { MaterialModule } from '../shared/common/material.module';

@Component({
  selector: 'app-workflow',
  imports: [MaterialModule],
  standalone: true,
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  showFiller = false;
}
