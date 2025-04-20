import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TelasService, Tela } from 'src/app/services/telas.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { createOutline,documentTextOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { CadastroTelaComponent } from 'src/app/components/cadastro-tela/cadastro-tela.component';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.page.html',
  styleUrls: ['./telas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  providers: [ModalController]
})
export class TelasPage implements OnInit {

  telas: Tela[] = [];
  filtro: string = '';
  telasPorMarca: { [key: string]: Tela[] } = {};

  constructor(
    private telasService: TelasService,
    private modalCtrl: ModalController
  ) {}

  addIcon(){
    
    documentTextOutline
  }

  ngOnInit() {
    this.carregarTelas();
  }

  carregarTelas() {
    this.telasService.getTelas().subscribe(data => {
      // Aplica capitalização no modelo
      this.telas = data.map(tela => ({
        ...tela,
        modelo: this.capitalizeFirstLetter(tela.modelo)
      }));
      this.agruparPorMarca();
    });
  }

  agruparPorMarca() {
    const agrupado: { [key: string]: Tela[] } = {};

    // Aplica filtro antes de agrupar
    const listaFiltrada = this.telas.filter(tela => {
      const texto = this.filtro.toLowerCase();
      return (
        tela.marca.toLowerCase().includes(texto) ||
        tela.modelo.toLowerCase().includes(texto)
      );
    });

    listaFiltrada.forEach(tela => {
      const marca = tela.marca.toLowerCase();
      if (!agrupado[marca]) {
        agrupado[marca] = [];
      }
      agrupado[marca].push(tela);
    });

    // Ordena modelos dentro de cada marca
    for (const marca in agrupado) {
      agrupado[marca].sort((a, b) => a.modelo.localeCompare(b.modelo));
    }

    // Ordena marcas alfabeticamente
    const marcasOrdenadas = Object.keys(agrupado).sort();
    const resultadoOrdenado: { [key: string]: Tela[] } = {};
    marcasOrdenadas.forEach(marca => {
      resultadoOrdenado[marca] = agrupado[marca];
    });

    this.telasPorMarca = resultadoOrdenado;
  }

  async abrirModalCadastro() {
    const modal = await this.modalCtrl.create({
      component: CadastroTelaComponent
    });

    await modal.present();

    modal.onDidDismiss().then(() => {
      this.carregarTelas();
    });
  }

  editarTela(tela: Tela) {
    window.location.href = `/editar-tela/${tela.id}`;
  }
  

  atualizarFiltro() {
    this.agruparPorMarca();
  }

  capitalizeFirstLetter(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
}
