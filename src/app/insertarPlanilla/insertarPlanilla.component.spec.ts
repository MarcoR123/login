import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPlanillaComponent } from './insertarPlanilla.component';

describe('InsertarComponent', () => {
  let component: InsertarPlanillaComponent;
  let fixture: ComponentFixture<InsertarPlanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPlanillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarPlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});