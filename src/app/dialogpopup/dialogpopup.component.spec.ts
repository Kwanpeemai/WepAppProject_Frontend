import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpopupComponent } from './dialogpopup.component';

describe('DialogpopupComponent', () => {
  let component: DialogpopupComponent;
  let fixture: ComponentFixture<DialogpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
