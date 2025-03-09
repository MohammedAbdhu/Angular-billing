import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/service/api.service';
import { DynamicTableComponent } from '../../../dynamic/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-stock-models',
  imports: [DynamicTableComponent],
  standalone: true,
  templateUrl: './stock-models.component.html',
  styleUrl: './stock-models.component.scss',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class StockModelsComponent implements OnInit {
  modelsData: any[] = [];
  public displayColumn: string[] = ['Item Id', 'Label', 'Brand Id', 'Brand Name', 'Base Percentage']
  iconHeader = [];
  column: string[] = ['itemId', 'label', 'brandId', 'brandName', 'basePercentage'];
  iconColumn: string[] = [];
  eventColumn: string[] = [];
  sortColumn: string[] = [];
  


  constructor(private apiService: ApiService){}


  ngOnInit(): void {
    this.getAllModels()
  }

  rowAction(event: any){
    
  }

  getAllModels(){
    this.apiService.getModel().subscribe((res: any) => {
      this.modelsData = res;
      console.log(this.column.length)
      for(let i = 0; i <= this.column.length; i++){
        this.modelsData.map((data) => {
          data[this.displayColumn[i]] = data[this.column[i]];
        })
      }
    }, err => {
      console.error('Error fetching models:', err);
    });
  }

}
