import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleCarteComponent } from './grille-carte.component';

describe('GrilleCarteComponent', () => {
  let component: GrilleCarteComponent;
  let fixture: ComponentFixture<GrilleCarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrilleCarteComponent]
    });
    fixture = TestBed.createComponent(GrilleCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
