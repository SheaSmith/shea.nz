import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedievalNotFoundComponent } from './medieval-not-found.component';

describe('MedievalNotFoundComponent', () => {
  let component: MedievalNotFoundComponent;
  let fixture: ComponentFixture<MedievalNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedievalNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedievalNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
