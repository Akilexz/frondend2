import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerImagenesComponent } from './traer-imagenes.component';

describe('TraerImagenesComponent', () => {
  let component: TraerImagenesComponent;
  let fixture: ComponentFixture<TraerImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
