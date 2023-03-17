import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  /**
   * Appel à l'API permettant de récupérer un utilisateur
   * @param userId number définissant l'id de l'utilisateur
   */
  getUser(id: number): Observable<any> {
    return this.firestore.collection("todo").snapshotChanges();
  }
}
