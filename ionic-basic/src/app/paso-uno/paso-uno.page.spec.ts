import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasoUnoPage } from './paso-uno.page';

describe('PasoUnoPage', () => {
  let component: PasoUnoPage;
  let fixture: ComponentFixture<PasoUnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasoUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
