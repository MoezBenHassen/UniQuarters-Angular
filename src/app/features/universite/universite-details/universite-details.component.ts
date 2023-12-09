import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Universite } from 'src/app/models/universite';

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.scss']
})
export class UniversiteDetailsComponent {
  @Input() uni!:Universite;
  @Output() showUniv = new EventEmitter<Universite>();
  showLocation(univ:Universite){
    this.showUniv.emit(univ);
   // console.log(univ)
  }
}
