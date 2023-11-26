import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export class ChambreService {
    constructor(private fb: FormBuilder) { }
    AddOrEditChambreForm = this.fb.group({
        id: [0],
        name: ['', Validators.required],
        otherProperty: ['']
    })
    data = [
        { id: 1, name: 'Item 1', otherProperty: 'Value 1' },
        { id: 2, name: 'Item 2', otherProperty: 'Value 2' },
        { id: 3, name: 'Item 3', otherProperty: 'Value 3' },
      ];

}
