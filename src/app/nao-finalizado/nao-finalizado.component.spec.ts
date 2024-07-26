import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoFinalizadoComponent } from './nao-finalizado.component';

describe('NaoFinalizadoComponent', () => {
  let component: NaoFinalizadoComponent;
  let fixture: ComponentFixture<NaoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
