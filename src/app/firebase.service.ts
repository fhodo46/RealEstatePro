import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  
  providedIn: 'root'})
export class FirebaseService {

  db: Firestore;
  studentCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getFirestore();
    this.studentCol = collection(this.db, 'students');

    
    onSnapshot(this.studentCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  getStudents() {
    const snapshot = getDocs(this.studentCol);
    return snapshot;
  }


  addStudent(name: string, age: string) {
    addDoc(this.studentCol, {
      name,
      age
    })
    return;
  }

  
  
  
  
  
  
  
  
  deleteStudent(docId: string) {
    const docRef = doc(this.db, 'students', docId)
    deleteDoc(docRef);
    return;
  }

  updateStudent(docId: string, name: string, age: string) {
    const docRef = doc(this.db, 'students', docId);
    updateDoc(docRef, { name, age })
    return;
  }
}