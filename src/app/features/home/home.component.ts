import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { UniversiteService } from 'src/app/services/universite.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: { label: string; routerLink: string; }[];

  constructor(private uniService:UniversiteService) { }
  productTypes = ['Option 1', 'Option 2', 'Option 3'];
  gouvernorats: string[] = this.uniService.getGouvernorats();


  ngOnInit(): void {
   
  }

 
}
