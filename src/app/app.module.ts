import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AgGridModule } from "ag-grid-angular";
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import{HttpModule} from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import {TransactionTableModule} from './transaction-table/transaction-table.module';
import {PersonService} from './shared-service/person.service';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    TransactionTableModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    AgGridModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
