import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-list-universite-filtered',
  templateUrl: './list-universite-filtered.component.html',
  styleUrls: ['./list-universite-filtered.component.scss']
})
export class ListUniversiteFilteredComponent implements OnInit {
  address!:String;
  universities:Universite[]=[];
  constructor(private ac:ActivatedRoute,private uniService:UniversiteService){}
  ngOnInit(): void {
    this.ac.params.subscribe((param) => {
      this.address = param['address']; });
      this.uniService.fetchUnisByAddress(this.address).subscribe((data:any)=>
      this.universities=data.data.universities);

    }


}
