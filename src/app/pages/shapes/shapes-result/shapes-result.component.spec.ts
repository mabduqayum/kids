import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesResultComponent } from './shapes-result.component';

describe('ShapesResultComponent', () => {
  let component: ShapesResultComponent;
  let fixture: ComponentFixture<ShapesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapesResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
