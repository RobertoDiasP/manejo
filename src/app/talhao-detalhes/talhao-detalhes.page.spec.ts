import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalhaoDetalhesPage } from './talhao-detalhes.page';

describe('TalhaoDetalhesPage', () => {
  let component: TalhaoDetalhesPage;
  let fixture: ComponentFixture<TalhaoDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TalhaoDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
