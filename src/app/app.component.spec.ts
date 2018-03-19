import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import {ChartsModule} from 'ng2-charts';
import{HttpModule} from '@angular/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import{RouterModule, Routes} from '@angular/router';
import {TransactionTableModule} from './transaction-table/transaction-table.module';
import {PersonService} from './shared-service/person.service';
import { PiechartComponent } from './piechart/piechart.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ AgGridModule.withComponents([]),HttpClientTestingModule,TransactionTableModule,ChartsModule],
      providers: [PersonService],
      declarations: [
        AppComponent,PiechartComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Sanction Screening'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sanction Screening');
  }));
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome To');
  }));
});
