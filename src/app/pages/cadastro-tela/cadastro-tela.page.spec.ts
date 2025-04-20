import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroTelaPage } from './cadastro-tela.page';

describe('CadastroTelaPage', () => {
  let component: CadastroTelaPage;
  let fixture: ComponentFixture<CadastroTelaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
