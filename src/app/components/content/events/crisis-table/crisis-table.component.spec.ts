import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisTableComponent } from './crisis-table.component';

describe('CrisisTableComponent', () => {
  let component: CrisisTableComponent;
  let fixture: ComponentFixture<CrisisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
