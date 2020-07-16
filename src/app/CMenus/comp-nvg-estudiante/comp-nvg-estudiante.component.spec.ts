import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNvgEstudianteComponent } from './comp-nvg-estudiante.component';

describe('CompNvgEstudianteComponent', () => {
  let component: CompNvgEstudianteComponent;
  let fixture: ComponentFixture<CompNvgEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNvgEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNvgEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
