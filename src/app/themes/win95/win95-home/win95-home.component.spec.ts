import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Win95HomeComponent } from './win95-home.component';

describe('HomeComponent', () => {
  let component: Win95HomeComponent;
  let fixture: ComponentFixture<Win95HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Win95HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Win95HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
