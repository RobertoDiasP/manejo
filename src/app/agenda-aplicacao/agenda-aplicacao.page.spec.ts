import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaAplicacaoPage } from './agenda-aplicacao.page';

describe('AgendaAplicacaoPage', () => {
  let component: AgendaAplicacaoPage;
  let fixture: ComponentFixture<AgendaAplicacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAplicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
