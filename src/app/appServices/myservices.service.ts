import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyservicesService {
  constructor() {}
  month = ['Jan', 'Feb', 'March'];
  username = 'I am Angular 7';
  client = [
    { name: 'Ajit', paid: false, money: 0 },
    { name: 'Nawaz', paid: true, money: 25000 },
    { name: 'Amaan', paid: false, money: 0 },
    { name: 'Ahaan', paid: true, money: 50000 },
  ];
  usrname = new BehaviorSubject('Hi');
}
