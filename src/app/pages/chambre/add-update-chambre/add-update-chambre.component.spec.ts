import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateChambreComponent } from './add-update-chambre.component';

describe('AddUpdateChambreComponent', () => {
  let component: AddUpdateChambreComponent;
  let fixture: ComponentFixture<AddUpdateChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
