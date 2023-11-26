import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteChambreComponent } from './get-delete-chambre.component';

describe('GetDeleteChambreComponent', () => {
  let component: GetDeleteChambreComponent;
  let fixture: ComponentFixture<GetDeleteChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDeleteChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeleteChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
