import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvgEstudianteComponent } from './nvg-estudiante.component';

describe('NvgEstudianteComponent', () => {
  let component: NvgEstudianteComponent;
  let fixture: ComponentFixture<NvgEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvgEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvgEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
