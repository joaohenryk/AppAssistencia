import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TelasService, Tela } from 'src/app/services/telas.service';

@Component({
  selector: 'app-cadastro-tela',
  templateUrl: './cadastro-tela.page.html',
  styleUrls: ['./cadastro-tela.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class CadastroTelaComponent implements OnInit {
  // Certifique-se de que a variável 'tela' está sendo usada corretamente
  tela: Tela = {
    id: '',
    marca: '',
    modelo: '',
    compra: 0,
    venda: 0,
    aro: '' // Adicionando aro como string
  };

  constructor(
    private telasService: TelasService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Alterar de 'novaTela' para 'tela'
  adicionarTela() {
    this.telasService.addTela(this.tela).then(() => {
      this.router.navigate(['/telas']);
    });
  }
}
