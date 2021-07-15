import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEditor2Component } from './font-size-editor2.component';

describe('FontSizeEditor2Component', () => {
  let component: FontSizeEditor2Component;
  let fixture: ComponentFixture<FontSizeEditor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizeEditor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeEditor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
