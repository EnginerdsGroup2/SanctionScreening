import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ChartsModule} from 'ng2-charts';
import { PiechartComponent } from './piechart.component';
import { PersonService } from '../shared-service/person.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChartsModule, HttpClientTestingModule],
      declarations: [ PiechartComponent ],
      providers: [PersonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
