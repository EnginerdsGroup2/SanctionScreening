import { TestBed, inject, TestComponentRenderer } from '@angular/core/testing';
import { PersonService } from './person.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

describe('PersonService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    });
  });

  it('should be created', inject([HttpTestingController,PersonService], (httpMock: HttpTestingController, service: PersonService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getransaction function', inject([PersonService], (service:PersonService)=>{
    expect(service.getTransaction).toBeTruthy();
  }))

  it('should have getCount function', inject([PersonService], (service:PersonService)=>{
    expect(service.getCount).toBeTruthy();
  }))
});
