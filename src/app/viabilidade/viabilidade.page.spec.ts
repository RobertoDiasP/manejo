import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViabilidadePage } from './viabilidade.page';

describe('ViabilidadePage', () => {
  let component: ViabilidadePage;
  let fixture: ComponentFixture<ViabilidadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
