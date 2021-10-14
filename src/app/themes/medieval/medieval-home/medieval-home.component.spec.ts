import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedievalHomeComponent } from './medieval-home.component';

describe('MedievalHomeComponent', () => {
  let component: MedievalHomeComponent;
  let fixture: ComponentFixture<MedievalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedievalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedievalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
