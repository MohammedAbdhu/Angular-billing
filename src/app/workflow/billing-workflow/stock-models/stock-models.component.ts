import { Component, NO_ERRORS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../shared/service/api.service';
import { DynamicTableComponent } from '../../../dynamic/dynamic-table/dynamic-table.component';
import { MaterialModule } from '../../../shared/common/material.module';

@Component({
  selector: 'app-stock-models',
  imports: [DynamicTableComponent, MaterialModule],
  standalone: true,
  templateUrl: './stock-models.component.html',
  styleUrl: './stock-models.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
  // providers: ViewEncapsulation.None
})
export class StockModelsComponent implements OnInit {
  modelsData: any[] = [];
  public displayColumn: string[] = ['Item Id', 'Label', 'Brand Id', 'Brand Name', 'Base Percentage']
  iconHeader = [];
  column: string[] = ['itemId', 'label', 'brandId', 'brandName', 'basePercentage'];
  iconColumn: string[] = [];
  eventColumn: string[] = [];
  sortColumn: string[] = [];
  length = 0;
  start = 0
  pageSize = 50
  


  constructor(private apiService: ApiService){}


  ngOnInit(): void {
    this.getAllModels()
  }

  rowAction(event: any){
    
  }

  getAllModels(){
    this.apiService.getModel().subscribe((res: any) => {
      this.modelsData = res;
      this.length = this.modelsData.length
      console.log(this.length)
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
