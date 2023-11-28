import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: { label: string; routerLink: string; }[];

  constructor() { }
  productTypes = ['Option 1', 'Option 2', 'Option 3'];

  ngOnInit(): void {
   
  }

 
}
