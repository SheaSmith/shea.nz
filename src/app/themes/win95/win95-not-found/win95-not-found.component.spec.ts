import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Win95NotFoundComponent } from './win95-not-found.component';

describe('Win95NotFoundComponent', () => {
  let component: Win95NotFoundComponent;
  let fixture: ComponentFixture<Win95NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Win95NotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Win95NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
