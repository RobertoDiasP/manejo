import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalhaoPage } from './talhao.page';

describe('TalhaoPage', () => {
  let component: TalhaoPage;
  let fixture: ComponentFixture<TalhaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TalhaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
