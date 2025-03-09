import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { MaterialModule } from '../../shared/common/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnChanges {
  displayedColumn: any;

  @Input() tableData: any;
  @Input() displayColumns: string[] = [];
  @Input() component: any;
  @Input() iconHeader: any;
  @Input() iconColumn: any;
  @Input() eventColumn: any;
  @Input() columnData: any;
  @Input() sortColumn: any;
  @Input() pagination: any;
  @Input() applyFilter: any;
  @Output() rowAction = new EventEmitter<any>()

  selection = new SelectionModel<any>(true, [])
  showTable: boolean = false;
  dataSource = new MatTableDataSource<any>();
  pageLength = null;
  pageSize = null;
  selectedRow: any;

  @ViewChild(MatSort)
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor() { }

  rowEventTrigger(key: any, data: any, keyVal?: any) {
    this.rowAction.emit({ key, data, keyVal })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.pagination !== null && this.pagination) {
      this.pageLength = this.pagination[0].length;
      this.pageSize = this.pagination[0].pageSize;
    }
    this.selectedRow = null;
    if (this.tableData) {
      if (changes['tableData']) {
        this.showTable = false;
        if (changes['tableData'].previousValue !== changes['tableData'].currentValue) {
          if (!this.showTable) {
            this.dataSource = new MatTableDataSource(this.tableData);
            this.showTable = true;
            if (this.pagination === null) {
              this.dataSource.paginator = this.pagination;
            }
            this.dataSource.sort = this.sort
          }
        }
      }
    }
  }

  onRowClick(row: any) {
    this.selectedRow = row;
  }

}
