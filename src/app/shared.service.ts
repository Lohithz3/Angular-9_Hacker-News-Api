import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {

  private messageSource = new BehaviorSubject(0);
  private messageSource1= new BehaviorSubject([]);
  private messageSource2= new BehaviorSubject([]);
  private messageSource3= new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  currentMessage1 = this.messageSource1.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentMessage3 = this.messageSource3.asObservable();
  constructor() { }

  changeMessage(numbercount: number) {
    this.messageSource.next(numbercount)
  }
  changeMessage1(message: any) {
    this.messageSource1.next(message)
  }
  changeMessage2(message: any) {
    this.messageSource2.next(message)
  }
  changeMessage3(message: any) {
    this.messageSource3.next(message)
  }


}