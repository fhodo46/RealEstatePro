import { Injectable, inject } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  

  
  
  constructor(private auth: Auth) { }
  getauthstate(){
    return authState(this.auth);
  }

  login(username: string, password: string){  return from(signInWithEmailAndPassword(this.auth, username, password)); }

  logout(){       
    
    
    return from(this.auth.signOut()); }



signUp(name: string, email: string, password: string){
  
 return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
  switchMap(({user})=> updateProfile(user, { displayName: name}))
 )
}




}