import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveenTableComponent } from './naveen-table.component';

describe('NaveenTableComponent', () => {
  let component: NaveenTableComponent;
  let fixture: ComponentFixture<NaveenTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaveenTableComponent]
    });
    fixture = TestBed.createComponent(NaveenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
