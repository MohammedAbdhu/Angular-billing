import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges, ViewChild, viewChild, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/common/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dynamic-table',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DynamicTableComponent implements OnChanges, AfterViewInit {
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
  paginator: MatPaginator | null | undefined;

  @ViewChild(MatSort)
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    if (paginator) {
      this.paginator = paginator;
      this.dataSource.paginator = this.paginator;
    }
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

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  onRowClick(row: any) {
    this.selectedRow = row;
  }

}
