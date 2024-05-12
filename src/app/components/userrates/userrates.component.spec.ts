import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserratesComponent } from './userrates.component';

describe('UserratesComponent', () => {
  let component: UserratesComponent;
  let fixture: ComponentFixture<UserratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserratesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
