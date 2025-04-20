import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tela {
  id?: string;
  marca: string;
  modelo: string;
  compra: number;
  venda: number;
  aro?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TelasService {

  private firestore: Firestore;

  constructor() {
    this.firestore = getFirestore(); 
  }

 
  async addTela(tela: Tela): Promise<void> {
    const telasRef = collection(this.firestore, 'telas');
    const docRef = await addDoc(telasRef, tela);
    console.log('Documento escrito com ID: ', docRef.id);
  }


  async updateTela(tela: Tela): Promise<void> {
    if (!tela.id) {
      throw new Error('ID da tela não fornecido');
    }

    const telaRef = doc(this.firestore, 'telas', tela.id); 
    await updateDoc(telaRef, {
      marca: tela.marca,
      modelo: tela.modelo,
      compra: tela.compra,
      venda: tela.venda,
      aro: tela.aro
      
    });
  }


  getTelas(): Observable<Tela[]> {
    const telasRef = collection(this.firestore, 'telas');
    return collectionData(telasRef, { idField: 'id' }) as Observable<Tela[]>;
  }

 
  async deleteTela(id: string): Promise<void> {
    if (!id) {
      throw new Error('ID da tela não fornecido');
    }

    const telaRef = doc(this.firestore, 'telas', id); 
    await deleteDoc(telaRef);
  }
}
