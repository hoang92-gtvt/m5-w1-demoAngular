import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoangComponent } from './hoang.component';

describe('HoangComponent', () => {
  let component: HoangComponent;
  let fixture: ComponentFixture<HoangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
