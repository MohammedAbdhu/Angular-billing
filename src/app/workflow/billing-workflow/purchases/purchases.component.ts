import { Component } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-purchases',
  imports: [],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss'
})
export class PurchasesComponent {
  jsonData: any;


  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          this.jsonData = result.data;
          console.log(this.jsonData);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });
    }
  }
}
