import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentReference, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { Perro } from '../domain/perro';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerrosfbService {

  constructor(private firestore: Firestore) { }

  guardarPerro(perro: Perro): Observable<DocumentReference> {
    const perrosCollection = collection(this.firestore, 'perros');
    return from(addDoc(perrosCollection, perro));
  }

  obtenerPerros(): Observable<any[]> {
    const perrosCollection = collection(this.firestore, 'perros')
    return collectionData(perrosCollection, {idField: 'id'}) as Observable<any[]>
  }

  borrarPerro(id: string){
    const perroDoc = doc(this.firestore,  `perros/${id}`)
    return deleteDoc(perroDoc)
  }

  actualizarPerro(id: string, perro: Perro) {
    const perroDoc = doc(this.firestore, `perros/${id}`);
    return updateDoc(perroDoc, { ...perro });
  }
}
// 