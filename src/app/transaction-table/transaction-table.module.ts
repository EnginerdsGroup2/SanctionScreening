import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './transaction-table.component';
import {AgGridModule} from 'ag-grid-angular/main';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms"; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [TransactionTableComponent],
  exports:[TransactionTableComponent]
})
export class TransactionTableModule { }
