import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/common/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}

  login(){
    this.router.navigate(['/workflow']);
  }

}
