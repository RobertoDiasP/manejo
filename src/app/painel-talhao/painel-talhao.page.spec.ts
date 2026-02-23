import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelTalhaoPage } from './painel-talhao.page';

describe('PainelTalhaoPage', () => {
  let component: PainelTalhaoPage;
  let fixture: ComponentFixture<PainelTalhaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelTalhaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
