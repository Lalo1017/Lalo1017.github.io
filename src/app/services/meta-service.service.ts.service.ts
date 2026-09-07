import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  accesoMeta = "Meta service running... ";
  private dbPath = '/metas';

  metaRef : AngularFirestoreCollection<Meta>;

  constructor(private db: AngularFirestore) {
    this.metaRef = db.collection(this.dbPath);
  }

  getMeta(): AngularFirestoreCollection<Meta>{
    return this.metaRef;
  }

  addItem(new_goal : string) {
    const item_data = { meta: new_goal};
    this.db.collection(this.dbPath).add(item_data)
      .then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(error => console.error('Error adding document: ', error));
  }

  deleteItem(id:string){
    console.log("id a elimiar: " + id);
    this.db.collection(this.dbPath).doc(id).delete()
      .then(response => console.log('Document deleted successfully'))
      .catch(error => console.error('Error adding document: ', error));
  }
}
