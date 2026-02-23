import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaCalorPage } from './mapa-calor.page';

describe('MapaCalorPage', () => {
  let component: MapaCalorPage;
  let fixture: ComponentFixture<MapaCalorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCalorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
