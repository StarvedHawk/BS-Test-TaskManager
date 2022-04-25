import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditEmpComponent } from './show-edit-emp.component';

describe('ShowEditEmpComponent', () => {
  let component: ShowEditEmpComponent;
  let fixture: ComponentFixture<ShowEditEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEditEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
