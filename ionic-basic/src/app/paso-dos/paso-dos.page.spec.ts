import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasoDosPage } from './paso-dos.page';

describe('PasoDosPage', () => {
  let component: PasoDosPage;
  let fixture: ComponentFixture<PasoDosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasoDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
