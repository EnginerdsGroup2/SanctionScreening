import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TransactionTableComponent } from './transaction-table.component';
import {AgGridModule} from "ag-grid-angular";
import { PersonService } from '../shared-service/person.service';

describe('TransactionTableComponent', () => {
  let component: TransactionTableComponent;
  let fixture: ComponentFixture<TransactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ AgGridModule.withComponents([]),HttpClientTestingModule],
      providers: [PersonService],
      declarations: [ TransactionTableComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  
  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('grid API is available after `detectChanges`', () => {
      fixture.detectChanges();
      expect(component.gridOptions.api).toBeTruthy();
  });

});
