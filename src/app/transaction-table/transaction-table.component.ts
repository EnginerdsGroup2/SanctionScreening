import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import { PersonService } from '../shared-service/person.service';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {GridOptions} from "ag-grid/main";
import "ag-grid-enterprise";
@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

columnDefs: any[]
rowData: any[];
public gridOptions: GridOptions;
private gridApi;
private gridColumnApi;
private defaultColDef; 
private overlayLoadingTemplate;
private rowSelection;
private persons:any[];
private rowClassRules;
private sendToClipboard;
private status:String;

constructor(private _personService:PersonService) {

    this.columnDefs = [
      {
        headerName: "Id",
        field: "id" 
      },
      {
        headerName: "PayerName",
        field: "payerName"
      },
      {
        headerName: "PayerAccount",
        field: "payerAccount"
      },
      {
        headerName: "PayeeName",
        field: "payeeName"
      },
      {
        headerName: "PayeeAccount",
        field: "payeeAccount"
      },
      {
        headerName: "Amount",
        field: "amount",
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Status",
        field: "status",
        width: 180
      },
      {
        headerName: "Date",
        field: "date"
      } 
    ];
  this.gridOptions = {
    columnDefs: this.columnDefs,
    getRowStyle: function(params) {
        if (params.data.status === 'Sanction Screening Fail' || params.data.status === 'Transaction Rollback') {
            return {
                'background-color': 'rgb(255,199,206)'
            };
        } else if (params.data.status === 'Sanction Screening Pass') {
            return {
                'background-color': 'rgb(198,239,206)'
            };
        }
        else if (params.data.status === 'Insufficient Balance') {
          return {
              'background-color': 'rgb(255,235,156)'
          };
      }
        return null;
    }
  }
  this.defaultColDef = { width: 150};
  this.rowSelection = "single";
  this.overlayLoadingTemplate =
  '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
}

 ngOnInit() {
    this._personService.getTransaction().subscribe((persons)=>{
      this.status=persons.map(persons => persons.status)
       console.log(this.status);
    },(error)=>{
      console.log(error);
    })
}
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this._personService.getTransaction().subscribe((persons)=>{
      params.api.setRowData(persons);
    })
    params.api.sizeColumnsToFit();
  }
}
