import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartComponent } from './admin-cart.component';

describe('AdminCartComponent', () => {
  let component: AdminCartComponent;
  let fixture: ComponentFixture<AdminCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCartComponent]
    });
    fixture = TestBed.createComponent(AdminCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
